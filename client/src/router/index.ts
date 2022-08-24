import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

import { useLoadingStore } from "@/stores/loading";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth", top: 15 };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "Каталог бездомных собак и кошек Кирова. Возьми себе друга!",
      },
    },
    {
      path: "/info/public",
      name: "publication",
      component: () => import("../views/Publication.vue"),
      meta: {
        title: "Публикация в каталоге",
      },
    },
    {
      path: "/info/foundling",
      name: "foundling",
      component: () => import("../views/Foundling.vue"),
      meta: {
        title: "Нашли животное?",
      },
    },
    {
      path: "/info/opd",
      name: "opd",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Обработка персональных данных",
      },
    },
    {
      path: "/info/cookie",
      name: "cookie",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Политика cookie",
      },
    },
    {
      path: "/support",
      name: "support",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Поддержите нас!",
      },
    },
    {
      path: "/adopted",
      name: "adopted",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Нашли дом!",
      },
    },
    {
      path: "/feedback",
      name: "feedback",
      component: () => import("../views/Feedback.vue"),
      meta: {
        title: "Есть вопрос? Спросите нас!",
      },
    },
    {
      path: "/:category",
      name: "animals",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Возьми себе друга!",
      },
      children: [
        {
          path: ":animal",
          name: "animal",
          component: () => import("../views/AboutView.vue"),
          meta: {
            title: "Возьми себе друга!",
          },
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
  if (to.name) {
    NProgress.start();
    useLoadingStore().loading(true, "route");
  }
  next();
});

// После загрузки завершить отсчет прогресс-бара
router.afterEach((to, from) => {
  NProgress.done();
  useLoadingStore().loading(false, "route");
});

export default router;
