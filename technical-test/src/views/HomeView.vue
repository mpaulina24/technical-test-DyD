<template>
  <section class="home">
    <h1 class="title">Bienvenido a la Demo Técnica</h1>

    <p class="subtitle">
      Proyecto desarrollado en Vue 3 + Vite, con despliegue e integración completa con Firebase. 
      Incluye una demostración de las principales bondades del framework y un módulo para 
      carga, procesamiento y descarga segura de archivos ZIP.
    </p>

    <div class="cards">
      <div class="card" v-for="feature in features" :key="feature.title">
        <h3>{{ feature.title }}</h3>
        <p class="card-desc">{{ feature.desc }}</p>

        <router-link :to="feature.route" class="btn">
          Ir →
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Bondades de Vue 3",
    desc: "Vista interactiva con ejemplos reales de reactividad, composición, componentes y bindings declarativos.",
    route: "/bondades"
  },
  {
    title: "Procesamiento de ZIP",
    desc: "Carga un archivo ZIP, descomprime desde backend, registra los archivos en Firestore y permite descargas con clave.",
    route: "/upload"
  },
];
</script>

<style scoped>
/* Layout general */
.home {
  max-width: 980px;
  margin: 0 auto;
  padding: 32px 24px;
}

.title {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #991b1b; /* rojo DyD */
  position: relative;
}


/* Subtítulo */
.subtitle {
  font-size: 1.15rem;
  color: #374151; /* gris profesional */
  margin-bottom: 40px;
  line-height: 1.7;
  max-width: 760px;
}

/* Grid de tarjetas */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 26px;
}

.card {
  background: #ffffff;
  padding: 28px;
  border-radius: 16px;
  border-left: 6px solid #991b1b; /* sello visual de DyD */
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.09);
}

/* Título de tarjeta */
.card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #991b1b;
}

/* Descripción */
.card-desc {
  font-size: 0.98rem;
  color: #374151;
  line-height: 1.55;
}

.btn {
  margin-top: 22px;
  display: inline-block;
  font-weight: 600;
  font-size: 0.95rem;
  color: #991b1b;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  background:rgba(153, 27, 27, 0.85);
  color: white;
}
</style>

