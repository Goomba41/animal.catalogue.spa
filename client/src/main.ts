import { createApp } from "vue";
import { createPinia } from "pinia"; // Store
import { createMetaManager } from "vue-meta"; // Page metadata

// HttpClient
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const metaManager = createMetaManager();

app.use(createPinia());
app.use(router);
app.use(metaManager);
app.use(VueAxios, axios);

app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
