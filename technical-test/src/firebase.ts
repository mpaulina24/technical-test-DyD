// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7AcUHtapuh3XiKaQ1vVGt8x-EGsB17ZA",
  authDomain: "technical-test-dyd-f45b1.firebaseapp.com",
  projectId: "technical-test-dyd-f45b1",
  storageBucket: "technical-test-dyd-f45b1.firebasestorage.app",
  messagingSenderId: "327601425004",
  appId: "1:327601425004:web:052de04b7e86534f0be649",
  measurementId: "G-EBZRY6EGPS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta servicios
export const db = getFirestore(app);
export const storage = getStorage(app);


