<template>
  <section class="features">
    <h1 class="title">Bondades de Vue 3</h1>
    <p class="subtitle">
      Ejemplos aplicados al desarrollo de productos escalables e interactivos
    </p>

    <div class="grid">
      <!-- 1. Componentes Reutilizables -->
      <div class="card">
        <h2>1. Componentes reutilizables</h2>
        <p>
          Vue permite construir interfaces a partir de componentes independientes,
          reutilizables y fáciles de mantener. Este enfoque reduce duplicación de código
          y facilita la creación de sistemas de diseño consistentes en productos reales.
        </p>

        <div class="demo-box" style="margin-top:12px;">
          <ReusableButton text="Haz click" @on-press="buttonClicks++" />
        </div>

        <p class="result" style="margin-top:12px;">
          Número de clics: <strong>{{ buttonClicks }}</strong>
        </p>
      </div>

      <!-- 2. Lógica -->
      <div class="card">
        <h2>2️. Lógica Reutilizable (Composables)</h2>
        <p class="desc">
          Este ejemplo muestra un composable para paginación, muy usado en dashboards,
          listados de usuarios, logs y módulos administrativos.
        </p>

        <div class="controls">
          <label>
            Items por página:
            <select v-model="size" @change="setPageSize(size)">
              <option v-for="n in [3,5,10]" :key="n" :value="n">{{ n }}</option>
            </select>
          </label>
        </div>

        <ul class="paginated-list">
          <li v-for="item in paginatedItems" :key="item.id">
            {{ item.name }}
          </li>
        </ul>

        <div class="pagination-buttons">
          <button @click="prev" :disabled="currentPage === 1">Anterior</button>
          <span>Página {{ currentPage }} de {{ totalPages }}</span>
          <button @click="next" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
      </div>


      <!-- 3. Renderizado condicional + listas + filtros -->
      <div class="card">
        <h2>3. Listas dinámicas + UI reactiva</h2>
        <p class="desc">
          Vue actualiza la UI automáticamente según los cambios en los datos.
          Combinando <strong>v-for</strong>, <strong>v-if</strong> y filtros reactivos
          es posible crear interfaces que responden al estado (dashboards, gestión de
          usuarios, tablas inteligentes).
        </p>

        <!-- Filtros -->
        <div class="filters">
          <input 
            v-model="search" 
            type="text" 
            placeholder="Buscar usuario..."
            class="input"
          />

          <select v-model="filterRole" class="input">
            <option value="">Todos los roles</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <!-- Estado: sin resultados -->
        <p v-if="filteredUsers.length === 0" class="empty">
          No se encontraron usuarios para esta búsqueda.
        </p>

        <!-- Listado -->
        <ul v-else class="user-list">
          <li 
            v-for="user in filteredUsers" 
            :key="user.id"
            class="user-item"
          >
            <div class="user-info">
              <strong>{{ user.name }}</strong>
              <span class="role" :class="user.role">{{ user.role }}</span>
            </div>
            <span class="status" :class="user.active ? 'on' : 'off'">
              {{ user.active ? "Activo" : "Inactivo" }}
            </span>
          </li>
        </ul>
      </div>

      <!-- 4. Consumo de API (simulado) -->
      <div class="card">
        <h2>4. Consumo de API simulado</h2>
        <p class="desc">
          Vue permite manejar solicitudes a APIs de forma reactiva, controlando estados
          como carga, éxito o error.
        </p>

        <div style="display:flex; gap:10px; align-items:center;">
          <button @click="fetchData" class="btn">
           Cargar mensaje remoto
          </button>

          <div v-if="loading" class="loading">Cargando...</div>
        </div>

        <p v-if="apiMessage" class="api-msg" style="margin-top:12px;">{{ apiMessage }}</p>
        <p v-if="apiError" class="api-error" style="margin-top:12px;">{{ apiError }}</p>
      </div>

      <!-- 5. Enfoque Declarativo -->
      <div class="card">
        <h2>5. Enfoque Declarativo</h2>
        <p class="desc">
          En Vue solo definimos el estado y cómo debe verse la interfaz. A partir de eso,
          el framework actualiza el DOM automáticamente según los cambios, sin necesidad
          de manipularlo manualmente.
        </p>

        <button class="btn" @click="togglePanel">
          {{ showPanel ? "Ocultar notificaciones" : "Mostrar notificaciones" }}
        </button>

        <!-- v-show mantiene el panel montado (útil para animaciones o estado interno) -->
        <div v-show="showPanel" class="notif-panel" style="margin-top:12px;">

          <!-- vacíos -> mensaje automático -->
          <p v-if="notifications.length === 0" class="empty">
            No tienes notificaciones pendientes.
          </p>

          <!-- lista declarativa -->
          <ul v-else class="notif-list">
            <li 
              v-for="notif in notifications"
              :key="notif.id"
              class="notif-item"
            >
              * {{ notif.text }}
            </li>
          </ul>

          <button class="btn small" @click="addNotif" style="margin-top:14px;">
            Generar notificación
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed} from "vue";
import ReusableButton from "../components/ReusableButton.vue";
import usePagination from "../composables/usePagination.js";

/* 1. Componentes reutilizables */
const buttonClicks = ref(0);

/* 2. Composable */
const items = ref([
  { id: 1, name: "Usuario 1" },
  { id: 2, name: "Usuario 2" },
  { id: 3, name: "Usuario 3" },
  { id: 4, name: "Usuario 4" },
  { id: 5, name: "Usuario 5" },
  { id: 6, name: "Usuario 6" },
  { id: 7, name: "Usuario 7" },
]);

const {
  currentPage,
  totalPages,
  paginatedItems,
  next,
  prev,
  size,
  setPageSize,
} = usePagination(items);

/* 3. Renderizado dinámico */
const search = ref("");
const filterRole = ref("");

const users = ref([
  { id: 1, name: "Ana Ruiz", role: "admin", active: true },
  { id: 2, name: "Carlos Pérez", role: "editor", active: false },
  { id: 3, name: "Luisa Gómez", role: "viewer", active: true },
  { id: 4, name: "Marcos Díaz", role: "viewer", active: true },
  { id: 5, name: "Sofía Herrera", role: "editor", active: false },
]);

const filteredUsers = computed(() => {
  const q = search.value.trim().toLowerCase();
  return users.value.filter(u => {
    const matchName = u.name.toLowerCase().includes(q);
    const matchRole = filterRole.value ? u.role === filterRole.value : true;
    return matchName && matchRole;
  });
});

/* 4. API simulada con estados completos */
const apiMessage = ref("");
const apiError = ref("");
const loading = ref(false);

async function fetchData() {
  loading.value = true;
  apiMessage.value = "";
  apiError.value = "";

  try {
    await new Promise((res) => setTimeout(res, 1000));

    // simula error con 15% de probabiliad
    if (Math.random() < 0.10) {
      throw new Error("Fallo simulado de la API");
    }

    apiMessage.value = "Mensaje recibido desde el servidor - " + new Date().toLocaleTimeString();
  } catch (err) {
    apiError.value = err.message || "Error desconocido";
  } finally {
    loading.value = false;
  }
}

/* 5. Enfoque declarativo */
const showPanel = ref(true);

const notifications = ref([
  { id: 1, text: "Tienes una nueva tarea asignada" },
  { id: 2, text: "El sistema fue actualizado correctamente" },
]);

function togglePanel() {
  showPanel.value = !showPanel.value;
}

function addNotif() {
  const id = Date.now(); // ID único profesional
  notifications.value.push({
    id,
    text: "Nueva notificación — " + new Date().toLocaleTimeString(),
  });
}
</script>

<style scoped>
.features {
  max-width: 1100px;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
}
.subtitle {
  color: #555;
  margin-bottom: 25px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
.desc {
  margin-bottom: 14px;
  color: #444;
}

/* botones */
.btn {
  background: #007bff;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.btn.small {
  padding: 6px 10px;
  font-size: 0.9rem;
}
.btn:hover {
  background: #0063d8;
}

.demo-box {
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #eef2ff;
  display: inline-block;
}


/* Pagination*/

.paginated-list {
  padding-left: 16px;
}

.pagination-buttons {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls select {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}


/* filtros y lista de usuarios */
.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}
.input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
}
.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.user-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  background: #fafafa;
  margin-bottom: 8px;
  border: 1px solid #eee;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.role {
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  text-transform: capitalize;
  color: white;
}
.role.admin { background: #ef4444; }
.role.editor { background: #3b82f6; }
.role.viewer { background: #10b981; }

.status.on { color: #10b981; font-weight: 600; }
.status.off { color: #ef4444; font-weight: 600; }

.empty { margin-top: 10px; color: #777; }

/* API */
.loading { color: #64748b; }
.api-msg {
  font-weight: bold;
  color: #065f46;
  background: #ecfdf5;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #a7f3d0;
}
.api-error {
  background: #fff1f2;
  color: #b91c1c;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #fecaca;
}

/* notifications */
.notif-panel { background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e6eef9; margin-top: 10px; }
.notif-list { list-style: none; padding: 0; margin: 0; }
.notif-item { padding: 8px; border-radius: 6px; margin-bottom: 8px; background: #fff; border: 1px solid #eee; }

/* responsive tweaks */
@media (max-width: 800px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
