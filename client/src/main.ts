import { createApp } from "vue";
import { createPinia } from "pinia"; // Store
import { createMetaManager } from "vue-meta"; // Page metadata

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleInfo,
  faThumbsUp,
  faArrowUp,
  faArrowUpRightFromSquare,
  faAnchor,
  faCircleExclamation,
  faTriangleExclamation,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faVk,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faVk,
  faInstagram,
  faTelegram,
  faCircleInfo,
  faThumbsUp,
  faArrowUp,
  faAnchor,
  faArrowUpRightFromSquare,
  faCircleExclamation,
  faPaperPlane,
  faTriangleExclamation
);

// HttpClient
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";

import App from "./App.vue";
import router from "./router";

// CSS
import "./assets/main.css";

const app = createApp(App);
const metaManager = createMetaManager();

app.use(createPinia());
app.use(router);
app.use(metaManager);
app.use(VueAxios, axios);
app.use(VueCookies, { expire: "7d" });

app.provide("axios", app.config.globalProperties.axios);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
