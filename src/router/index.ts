import { createRouter, createWebHistory } from "vue-router";
import ShowImageView from "@/views/ShowImageView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loginLayout",
      component: ShowImageView,
    },
  ]
});

export default router;
