import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "info/public",
          name: "publication",
          component: AboutViewVue,
        },
        {
          path: "info/foundling",
          name: "foundling",
          component: AboutViewVue,
        },
        {
          path: "info/opd",
          name: "opd",
          component: AboutViewVue,
        },
        {
          path: "info/cookie",
          name: "cookie",
          component: AboutViewVue,
        },
        {
          path: "support",
          name: "support",
          component: AboutViewVue,
        },
        {
          path: "adopted",
          name: "adopted",
          component: AboutViewVue,
        },
        {
          path: "feedback",
          name: "feedback",
          component: AboutViewVue,
        },
        {
          path: ":category",
          name: "animals",
          component: AboutViewVue,
          children: [
            {
              path: ":animal",
              name: "animal",
              component: AboutViewVue,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
