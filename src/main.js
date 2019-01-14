import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/plugins";
import "@/directives";
import "@/assets/styles";

Vue.config.productionTip = false;

console.log(process.env.BASE_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
