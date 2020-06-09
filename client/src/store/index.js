import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wikis: null,
    search_results: null
  },
  mutations: {
    SET_WIKIS(state, payload) {
      Vue.set(state, 'wikis', payload);
    },
    UPDATE_WIKI(state, payload) {
      const wikiIndex = state.wikis.indexOf(payload);
      state.wikis[wikiIndex] = payload;
    },
    SEARCH_RESULTS(state, payload) {
      state.search_results = payload;
    }
  },
  actions: {
    getWikis({commit}) {
      fetch('/api/wikis')
      .then(blob => blob.json())
      .then(data => {
        commit("SET_WIKIS", data);
      });
    },
    updateWiki({commit}, payload) {
      fetch(`/api/update/${payload.rowid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        commit('UPDATE_WIKI', payload)
      })
      .catch(err => {
        console.log(err);
      }); 
    },
    createWiki({dispatch}, payload) {
      fetch(`/api/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(() => {
        dispatch("getWikis");
      });
    },
    searchWikis({commit}, payload) {
      fetch(`/api/search?search=${payload}`).then(res => res.json()).then(json => {
        commit('SEARCH_RESULTS', json)
      })
    }
  },
  getters: {
    selectWiki: state => (slug) => {
      return state.wikis.find(wiki => wiki.page_slug === slug);
    }
  }
})
