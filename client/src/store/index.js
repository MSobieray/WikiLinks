import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wikis: null
  },
  mutations: {
    UPDATE_WIKIS(state, payload) {
      Vue.set(state, 'wikis', payload);
    }
  },
  actions: {
    getWikis({commit}) {
      fetch('/api/wikis').then(blob => blob.json()).then(data => {
        commit("UPDATE_WIKIS", data);
      });
    }
  },
  getters: {
    selectWiki: state => (id) => {
      return state.wikis.find(wiki => wiki.rowid === Number(id))
    }
  }
})
