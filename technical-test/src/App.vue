<template>
  <div class="layout">
    <Sidebar />
    
    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style>

/* --- Layout general --- */
.app-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #f8fafc;
}

/* --- Contenido principal --- */
.main-content {
  margin-left: 100px;
  flex: 1;
  padding: 1.5rem;
}

</style>