<template>
  <nav :class="['sidenav', { collapsed }]" role="navigation">
    <!-- Header -->
    <div class="sidenav-header">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        class="w-40"
      />
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
          Gestión de archivos
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
       Programado por
        <a href="https://github.com/mpaulina24" target="_blank" rel="noopener noreferrer">
          MariaPaulinaArias
        </a>,
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
  width: 240px;
  background-color: #ffffff;
  border-right: 4px solid #991b1b; 
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
  z-index: 1100;
}

/* --- HEADER --- */
.sidenav-header img {
  width: 80%;         
  max-width: 180px; 
  height: auto; 
  display: block;
  margin: 0 auto; 
}


.title {
  font-size: 1.45rem;
  font-weight: 700;
  color: #991b1b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* --- MENÚ --- */
.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0.3rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #374151;
  font-weight: 500;
  padding: 0.75rem 1.3rem;
  text-decoration: none;
  border-radius: 6px;
  transition: all 180ms ease;
}

/* Hover corporativo */
.nav-link:hover {
  background-color: rgba(153, 27, 27, 0.08); /* Rojo tenue */
  color: #991b1b;
  transform: translateX(4px);
}

/* Opción activa */
.nav-link.active {
  background-color: rgba(153, 27, 27, 0.15);
  color: #991b1b;
  font-weight: 600;
  border-left: 4px solid #f97316;
}

/* --- SEPARADORES --- */
.divider {
  height: 1px;
  background: #e5e7eb;
  margin: 14px 0;
}

/* --- FOOTER --- */
.sidebar-footer {
  margin-top: auto;
  padding: 1.1rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
}

.sidebar-footer a {
  color: #991b1b;
  font-weight: 600;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .sidenav {
    width: 200px;
  }

  .title {
    font-size: 1.25rem;
  }

  .nav-link {
    font-size: 0.92rem;
  }

  .sidebar-footer {
    font-size: 0.75rem;
  }
}

</style>
