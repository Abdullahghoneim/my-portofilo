import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
// config routing
Vue.use(VueRouter);
import { routes } from "./routers";

// validations config
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// config vue resource
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
