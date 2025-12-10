<template>
  <section class="home">
    <h1 class="title">Bienvenido a la prueba técnica</h1>
    <p class="subtitle">
      Este proyecto muestra distintas bondades de Vue 3 junto con integración con Firebase.
    </p>

    <div class="cards">
      <div class="card" v-for="feature in features" :key="feature.title">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>

        <router-link :to="feature.route" class="btn">
          Ver →
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Bondades de Vue.js",
    desc: "Ejemplos prácticos del sistema reactivo de Vue 3.",
    route: "/bondades"
  },
];
</script>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 28px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  padding: 18px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card h3 {
  margin-bottom: 8px;
}

.btn {
  margin-top: 12px;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}
.btn:hover {
  text-decoration: underline;
}
</style>
