<template>
  <section class="about">
    <div class="card header-card">
      <h1>Acerca del Proyecto</h1>
      <p>
        Este proyecto es una prueba técnica desarrollada en 
        <strong>Vue 3</strong> con <strong>Vite</strong>, integrada con 
        <strong>Firebase Hosting, Storage y Firestore</strong>.
        Se construyó para la empresa 
        <strong>D&D – Dinámica y Desarrollo</strong>, demostrando un flujo completo
        de frontend + backend.
      </p>
    </div>

    <div class="grid">
      <!-- Tecnologías -->
      <div class="card">
        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li>Vue 3 + Composition API</li>
          <li>Vite</li>
          <li>Vue Router</li>
          <li>Firebase Hosting</li>
          <li>Firebase Storage</li>
          <li>Firestore Database</li>
          <li>Emuladores Firebase</li>
        </ul>
      </div>

      <!-- Objetivos -->
      <div class="card">
        <h2>Objetivos del proyecto</h2>
        <ol>
          <li>
            <strong>Demostración de Vue 3:</strong>
            Interfaz con tarjetas dinámicas usando Composition API.
          </li>
          <li>
            <strong>Gestión de archivos ZIP:</strong>
            Subida, descompresión, registro en Firestore y descarga segura.
          </li>
        </ol>
      </div>
    </div>

    <a
      class="github"
      href="https://github.com/mpaulina24/technical-test-DyD"
      target="_blank"
      rel="noopener noreferrer"
    >
      🔗 Ver repositorio en GitHub
    </a>
  </section>
</template>

<style scoped>
/* ---- LAYOUT BASE ---- */
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* ---- CARDS ---- */
.card {
  background: #ffffffcc; 
  backdrop-filter: blur(6px);
  padding: 24px;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.07);
}

/* Tarjeta principal */
.header-card {
  text-align: center;
}

/* ---- TEXTOS ---- */
h1 {
  font-size: 1.6rem;;
  margin-bottom: 12px;
  color: #991b1b;
  font-weight: 700;
}

h2 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
}

p, li {
  color: #444;
  line-height: 1.55;
  font-size: 1.05rem;
}

ul, ol {
  padding-left: 20px;
  margin: 10px 0;
}

li {
  margin-bottom: 8px;
}

/* ---- GRID ---- */
.grid {
  display: grid;
  gap: 26px;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 780px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* ---- LINK REPO ---- */
.github {
  text-align: center;
  display: inline-block;
  align-self: center;
  margin-top: 10px;
  color: #991b1b;
  font-size: 1.15rem;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
}

.github:hover {
  color: #7f1515;
  transform: translateY(-2px);
}
</style>
