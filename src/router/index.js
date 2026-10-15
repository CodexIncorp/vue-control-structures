import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/v-if",
      name: "v-if",
      component: () => import("@/views/VIfView.vue"),
    },
    {
      path: "/v-show",
      name: "v-show",
      component: () => import("@/views/VShowView.vue"),
    },
    {
      path: "/v-for",
      name: "v-for",
      component: () => import("@/views/VForView.vue"),
    },
    {
      path: "/v-bind-key",
      name: "v-bind-key",
      component: () => import("@/views/VBindKeyView.vue"),
    },
  ],
});

export default router;
