import Vue from "vue";
import Meta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import InfiniteLoading from "vue-infinite-loading";
import VueLodash from "vue-lodash";
import { chunk } from "lodash";
import VueLazyload from "vue-lazyload";
import BackToTop from "vue-backtotop";
import LoadScript from "vue-plugin-load-script";
import VueCookie from "vue-cookie";
import Vuelidate from "vuelidate";

import "../node_modules/nprogress/nprogress.css";

// FontAwesome5 import
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faCopyright,
  faArrowCircleUp,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowUp,
  faTimesCircle,
  faThList
} from "@fortawesome/free-solid-svg-icons";
import { faVk, faInstagram, faDev } from "@fortawesome/free-brands-svg-icons";

// FontAwesome5 icons library and component
library.add(
  faUserSecret,
  faVk,
  faCopyright,
  faInstagram,
  faDev,
  faArrowCircleUp,
  faArrowUp,
  faTimesCircle,
  faArrowCircleLeft,
  faArrowCircleRight,
  faThList
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(VueLodash, { lodash: { chunk } });
Vue.use(VueLazyload, {
  loading: require(`@/assets/img/grid.svg`)
});
Vue.use(Meta);
Vue.use(BackToTop);
Vue.use(LoadScript);
Vue.use(VueCookie);
Vue.use(Vuelidate);
Vue.use(InfiniteLoading, {
  props: {
    distance: 1
  },
  system: {
    throttleLimit: 1000
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
