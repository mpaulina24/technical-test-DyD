<template>
  <section class="upload-section">
    <h1>Subir archivo ZIP</h1>

    <input type="file" @change="handleFile" accept=".zip" />
    <button @click="uploadFile" :disabled="!selectedFile">Subir ZIP</button>

    <h2>Archivos descomprimidos</h2>
    <ul>
      <li v-for="file in files" :key="file.id">
        {{ file.name }}
        <button @click="downloadFile(file.fullPath)">Descargar</button>
      </li>
    </ul>

    <div style="margin-top: 20px; padding: 10px; border: 1px solid #ccc">
      <strong>Estado:</strong>
      <p>{{ debugMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { initializeApp } from "firebase/app";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// --- Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7AcUHtapuh3XiKaQ1vVGt8x-EGsB17ZA",
  authDomain: "technical-test-dyd-f45b1.firebaseapp.com",
  projectId: "technical-test-dyd-f45b1",
  storageBucket: "technical-test-dyd-f45b1.firebasestorage.app",
  messagingSenderId: "327601425004",
  appId: "1:327601425004:web:052de04b7e86534f0be649",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

const selectedFile = ref(null);
const files = ref([]);
const debugMessage = ref("Esperando acción...");
let isAuthenticated = ref(false);

// --- Autenticación anónima al montar
onMounted(() => {
  signInAnonymously(auth)
    .then(() => {
      console.log("Autenticación anónima lista");
      isAuthenticated.value = true;
    })
    .catch(err => {
      console.error("Error auth:", err);
      debugMessage.value = "ERROR de autenticación: " + err.message;
    });

  // Suscripción a Firestore
  const q = query(collection(db, "zip-files"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    files.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
});

// --- Manejar selección de archivo
function handleFile(event) {
  selectedFile.value = event.target.files[0];
  debugMessage.value = "Archivo seleccionado: " + selectedFile.value.name;
}

// --- Subir archivo ZIP
async function uploadFile() {
  if (!selectedFile.value) {
    debugMessage.value = "No hay archivo seleccionado.";
    return;
  }
  if (!isAuthenticated.value) {
    debugMessage.value = "Esperando autenticación...";
    return;
  }

  try {
    debugMessage.value = "Subiendo ZIP a Firebase Storage...";

    const zipPath = `zips/${Date.now()}-${selectedFile.value.name}`;
    const fileRef = sRef(storage, zipPath);

    await uploadBytes(fileRef, selectedFile.value);
    debugMessage.value = "ZIP subido correctamente. Obteniendo URL...";

    const downloadUrl = await getDownloadURL(fileRef);
    debugMessage.value = "Enviando ZIP al backend para descomprimir...";

    const res = await fetch("http://localhost:5000/process-zip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: downloadUrl })
    });

    const body = await res.json();
    if (res.ok) debugMessage.value = `ZIP procesado. Archivos descomprimidos: ${body.files}`;
    else debugMessage.value = "Error backend: " + (body.error || res.status);

    selectedFile.value = null;
  } catch (err) {
    console.error(err);
    debugMessage.value = "ERROR: " + err.message;
  }
}

// --- Descargar archivo
async function downloadFile(fullPath) {
  const key = prompt("Ingresa la clave para descargar:");
  if (!key) return;

  const url = `http://localhost:5000/download?path=${encodeURIComponent(fullPath)}&key=${encodeURIComponent(key)}`;
  window.open(url, "_blank");
}


</script>

<style scoped>
.upload-section {
  margin-left: 120px;
  padding: 20px;
}
</style>
