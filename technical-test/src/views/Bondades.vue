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


</style>
