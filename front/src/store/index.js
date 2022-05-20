import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  const store = new Vuex.Store({
    state: {
      config : {
        title : "SSAFY TOWN"
      }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  });

  return store;
}