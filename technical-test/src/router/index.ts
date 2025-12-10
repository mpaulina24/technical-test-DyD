import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";

import Bondades from "../views/Bondades.vue";
import About from "../views/AboutView.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  
  { path: "/bondades", component: Bondades },
  { path: "/about", component: About },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
