import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

import Home from "../views/Home.vue";
import Animals from "../views/Animals.vue";
import Animal from "../views/Animal.vue";
import Publication from "../views/Publication.vue";
import Foundling from "../views/Foundling.vue";
import Opd from "../views/Opd.vue";
import Cookie from "../views/Cookie.vue";
import Support from "../views/Support.vue";
import Chosen from "../views/Chosen.vue";
import Feedback from "../views/Feedback.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Каталог бездомных собак и кошек Кирова. Возьми себе друга!",
    },
    children: [
      {
        path: "info/public",
        name: "publication",
        component: Publication,
        meta: {
          title: "Публикация в каталоге",
        },
      },
      {
        path: "info/foundling",
        name: "foundling",
        component: Foundling,
        meta: {
          title: "Нашли животное?",
        },
      },
      {
        path: "info/opd",
        name: "opd",
        component: Opd,
        meta: {
          title: "Обработка персональных данных",
        },
      },
      {
        path: "info/cookie",
        name: "cookie",
        component: Cookie,
        meta: {
          title: "Политика cookie",
        },
      },
      {
        path: "support",
        name: "support",
        component: Support,
        meta: {
          title: "Поддержите нас!",
        },
      },
      {
        path: "chosen",
        name: "chosen",
        component: Chosen,
        meta: {
          title: "Нашли дом!",
        },
      },
      {
        path: "feedback",
        name: "feedback",
        component: Feedback,
        meta: {
          title: "Есть вопрос? Спросите нас!",
        },
      },
      {
        path: ":category",
        name: "animals",
        component: Animals,
        meta: {
          title: "Возьми себе друга!",
        },
        children: [
          {
            path: ":animal",
            name: "animal",
            component: Animal,
            meta: {
              title: "Возьми себе друга!",
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

// Перед загрузкой страницы старт прогресс-бара
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// После загрузки завершить отсчет прогресс-бара
// eslint-disable-next-line
router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
