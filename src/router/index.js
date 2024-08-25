import { createRouter, createWebHistory } from "vue-router";
import PageCharacters from "@/pages/Characters/PageCharacters.vue";
import PageMain from "@/pages/Home/PageMain.vue";

const routes = [
  {
    path: "/",
    component: PageMain,
  },
  {
    path: "/characters",
    component: PageCharacters
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
