import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavTransparent: false
  },
  mutations: {
    setNavTransparent(state, payload) {
      state.isNavTransparent = payload;
    }
  },
  actions: {}
});
