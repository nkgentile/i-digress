import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing";
import Watch from "./views/Watch";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing
    },
    {
      path: "/watch",
      name: "watch",
      component: Watch,
      meta: {
        hideNavigation: true
      }
    }
  ]
});
