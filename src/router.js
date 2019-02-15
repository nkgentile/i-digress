import Vue from "vue";
import Router from "vue-router";
import Landing from "@/views/Landing";
import Watch from "@/views/Watch";
import Login from "@/views/Login";

Vue.use(Router);

const router = new Router({
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
        hideNavigation: true,
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        hideNavigation: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("isLoggedIn") === null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
