import express from "express";
import fetch from "node-fetch";
import AdmZip from "adm-zip";
import crypto from "crypto";
import cors from "cors";

import admin from "firebase-admin";
import { readFileSync } from "fs";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Admin SDK
const serviceAccount = JSON.parse(readFileSync("./service-account.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "technical-test-dyd-f45b1.firebasestorage.app"
  
});

const bucket = admin.storage().bucket();
const db = admin.firestore();

// Clave para descargas
const SECRET_PASSWORD = "1234";
const SECRET_HASH = crypto.createHash("sha256").update(SECRET_PASSWORD).digest("hex");

// Endpoint que recibe URL del ZIP y lo descomprime
app.post("/process-zip", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "Falta URL" });

    console.log("Descargando ZIP desde Storage...");
    const response = await fetch(url);
    if (!response.ok) return res.status(400).json({ error: "No se pudo descargar ZIP" });

    const buffer = await response.buffer();
    const zip = new AdmZip(buffer);
    const entries = zip.getEntries();

    // Limpiar colección zip-files
    const snaps = await db.collection("zip-files").get();
    const batch = db.batch();
    snaps.forEach(d => batch.delete(d.ref));
    await batch.commit();

    // Subir archivos descomprimidos a Storage y guardarlos en Firestore
    let filesProcessed = 0;
    // Subir archivos descomprimidos a Storage y guardarlos en Firestore
    for (const entry of entries) {
      if (entry.isDirectory) continue;

      const cleanedName = entry.entryName.replace(/\\/g, "/"); // nombre del archivo
      const fileData = entry.getData(); // contenido del archivo

      // Crear referencia exacta en Storage
      const storageFile = bucket.file(`zips/${cleanedName}`);

      // Subir el archivo a Storage
      await storageFile.save(fileData, {
        resumable: false, // evita problemas con archivos pequeños
        contentType: "application/octet-stream",
        public: false
      });

      // Guardar en Firestore
      await db.collection("zip-files").add({
        name: cleanedName,
        fullPath: `zips/${cleanedName}`,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      filesProcessed++;
    }

    console.log("ZIP procesado:", filesProcessed, "archivos subidos a Storage");
    return res.json({ ok: true, files: filesProcessed });

  } catch (err) {
    console.error("ERROR process-zip:", err);
    return res.status(500).json({ error: err.message });
  }
});


// Endpoint para descargar archivo desde Storage validando clave
app.get("/download", async (req, res) => {
  try {
    const { path, key } = req.query;

    if (!key) return res.status(400).send("Falta clave");
    if (!path) return res.status(400).send("Falta path");

    const keyHash = crypto.createHash("sha256").update(key).digest("hex");
    if (keyHash !== SECRET_HASH) return res.status(403).send("Clave incorrecta");

    const file = bucket.file(path);

    const [exists] = await file.exists();
    if (!exists) return res.status(404).send("Archivo no encontrado");

    const [signedUrl] = await file.getSignedUrl({
      action: "read",
      expires: Date.now() + 5 * 60 * 1000
    });

    return res.redirect(signedUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});



app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
