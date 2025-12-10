<template>
  <section class="about">
    <h1>Acerca del Proyecto</h1>

    <p class="intro">
      Este proyecto es una prueba técnica desarrollada en Vue 3 con Vite,
      desplegada en Firebase Hosting y usando Firebase Storage + Firestore. Desarrollada para 
      la empresa D&D Dinámica y Desarrollo
    </p>

    <h2>Tecnologías utilizadas</h2>
    <ul class="list">
      <li>Vue 3 + Composition API</li>
      <li>Vite como herramienta de build</li>
      <li>Vue Router</li>
      <li>Firebase Hosting</li>
      <li>Firebase Storage</li>
      <li>Firestore Database</li>
      <li>Emuladores de Firebase para desarrollo local</li>
    </ul>

    <h2>Objetivo</h2>
    <p class="objective">
      Crear un sitio que muestre varias bondades de Vue mediante ejemplos en vivo,
      y desarrollar una funcionalidad completa para subir un archivo ZIP,
      procesarlo en backend, guardar sus archivos en Storage, registrar sus nombres
      en Firestore y listarlos en tiempo real desde el frontend.
    </p>

    <h2>Repositorio</h2>
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
.about {
  max-width: 800px;
  margin: 0 auto;
}

.intro, .objective {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 20px;
}

.list {
  margin: 12px 0 24px;
  padding-left: 18px;
}

.github {
  display: inline-block;
  margin-top: 8px;
  color: #2563eb;
  font-weight: bold;
  text-decoration: none;
}
.github:hover {
  text-decoration: underline;
}
</style>
