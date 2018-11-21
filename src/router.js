import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing';
import Home from './views/Home.vue';
import Watch from './views/Watch';
import Squad from './views/Squad';
import Buzz from './views/Buzz';
import BTS from './views/BTS';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/watch',
      name: 'watch',
      components: {
        default: Watch,
      },
      children: [
        {
          path: 'popup/:id',
          components: {
            default: Watch,
            modal: () => import('@/views/Overlay'),
          },
          props: {
            default: true,
            modal: true,
          },
        }
      ],
    },
    {
      path: '/squad',
      name: 'squad',
      component: Squad,
      meta: {
        showInNav: true,
      },
    },
    {
      path: '/buzz',
      name: 'buzz',
      component: Buzz,
      meta: {
        showInNav: true,
      },
    },
    {
      path: '/bts',
      name: 'bts',
      component: BTS,
      meta: {
        showInNav: true,
      },
    },
  ]
})
