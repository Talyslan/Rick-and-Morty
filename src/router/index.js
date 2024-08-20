import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import PageCharacters from "@/pages/Characters/PageCharacters.vue";
import PageDetailCharacters from "@/pages/DetailCharacters/PageDetailCharacters.vue";
import PageDetailEpisodes from "@/pages/DetailEpisodes/PageDetailEpisodes.vue";
import PageMain from "@/pages/Home/PageMain.vue";

const routes = [
  {
    path: "/",
    component: PageMain,
  },
  {
    path: "/characters",
    component: PageCharacters
  },
  {
    path: "/PageDetailCharacters",
    component: PageDetailCharacters
  },
  {
    path: "/PageDetailEpisodes",
    component: PageDetailEpisodes
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
