<template>
  <nav :class="['sidenav', { collapsed }]" role="navigation">
    <!-- Header -->
    <div class="sidenav-header">
      <h2 class="title">Vue Demo</h2>
    </div>

    <!-- Menú -->
    <ul class="navbar-nav" role="menu">

      <!-- Grupo 1 -->
      <li class="nav-item" role="none">
        <router-link
          to="/home"
          class="nav-link"
          :class="{ active: isActive('/home') }"
          role="menuitem"
        >
          Home
        </router-link>
      </li>

      <li class="nav-item" role="none">
        <router-link
          to="/bondades"
          class="nav-link"
          :class="{ active: isActive('/bondades') }"
          role="menuitem"
        >
          Bondades de Vue
        </router-link>
      </li>


      <li class="divider"></li>

      <li class="nav-item" role="none">
        <router-link
          to="/upload"
          class="nav-link"
          :class="{ active: isActive('/upload') }"
          role="menuitem"
        >
          Cargar archivos
        </router-link>
      </li>

      <li class="divider"></li>

      <li class="nav-item" role="none">
        <router-link
          to="/about"
          class="nav-link"
          :class="{ active: isActive('/about') }"
          role="menuitem"
        >
          Acerca
        </router-link>
      </li>

      <li class="nav-item" role="none">
        <a
          class="nav-link"
          href="https://github.com/mpaulina24/technical-test-DyD"
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
        >
          GitHub
        </a>
      </li>
    </ul>

    <!-- Footer -->
    <div class="sidebar-footer">
      <p>Demo técnica</p>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const collapsed = ref(false);

const isActive = (path) => {
  const current = route.path;
  return current === path || current.startsWith(path + "/") || current.startsWith(path);
};
</script>

<style scoped>
/* --- CONTENEDOR PRINCIPAL --- */
.sidenav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 230px;
  background-color: #ffffff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
  z-index: 1100;
}

/* --- HEADER --- */
.sidenav-header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
}

/* --- MENÚ --- */
.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0.45rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #334155;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.25s ease;
}

.nav-link:hover {
  background-color: rgba(0, 128, 255, 0.09);
  color: #0056b3;
  transform: translateX(3px);
}

.nav-link.active {
  background-color: rgba(0, 128, 255, 0.15);
  color: #0056b3;
  font-weight: 600;
}

/* --- SEPARADORES --- */
.divider {
  height: 1px;
  background: #e5e7eb;
  margin: 12px 0;
  border-radius: 2px;
}

/* --- FOOTER --- */
.sidebar-footer {
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.8rem;
  color: #6c757d;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .sidenav {
    width: 190px;
  }

  .title {
    font-size: 1.2rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }

  .sidebar-footer {
    font-size: 0.7rem;
  }

  /* Ajuste del contenido */
  :global(.main-content) {
    margin-left: 190px;
  }
}
</style>
