import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import { useLoadingStore } from "@/stores/loading";

import AboutViewVue from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "Каталог бездомных собак и кошек Кирова. Возьми себе друга!",
      },
      children: [
        {
          path: "info/public",
          name: "publication",
          component: AboutViewVue,
          meta: {
            title: "Публикация в каталоге",
          },
        },
        {
          path: "info/foundling",
          name: "foundling",
          component: AboutViewVue,
          meta: {
            title: "Нашли животное?",
          },
        },
        {
          path: "info/opd",
          name: "opd",
          component: AboutViewVue,
          meta: {
            title: "Обработка персональных данных",
          },
        },
        {
          path: "info/cookie",
          name: "cookie",
          component: AboutViewVue,
          meta: {
            title: "Политика cookie",
          },
        },
        {
          path: "support",
          name: "support",
          component: AboutViewVue,
          meta: {
            title: "Поддержите нас!",
          },
        },
        {
          path: "adopted",
          name: "adopted",
          component: AboutViewVue,
          meta: {
            title: "Нашли дом!",
          },
        },
        {
          path: "feedback",
          name: "feedback",
          component: AboutViewVue,
          meta: {
            title: "Есть вопрос? Спросите нас!",
          },
        },
        {
          path: ":category",
          name: "animals",
          component: AboutViewVue,
          meta: {
            title: "Возьми себе друга!",
          },
          children: [
            {
              path: ":animal",
              name: "animal",
              component: AboutViewVue,
              meta: {
                title: "Возьми себе друга!",
              },
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

// Перед загрузкой страницы старт прогресс-бара
router.beforeResolve((to, from, next) => {
  const loadingStore = useLoadingStore();

  if (to.name) {
    NProgress.start();
    loadingStore.loading(true, "route");
  }
  next();
});

// После загрузки завершить отсчет прогресс-бара
router.afterEach((to, from) => {
  const loadingStore = useLoadingStore();

  NProgress.done();
  loadingStore.loading(false, "route");
});

export default router;
