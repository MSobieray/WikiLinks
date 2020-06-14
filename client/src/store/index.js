import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wikis: null,
    search_results: null,
    diffs: null
  },
  mutations: {
    SET_WIKIS(state, payload) {
      Vue.set(state, 'wikis', payload);
    },
    UPDATE_WIKI(state, payload) {
      const wikis = state.wikis.map((wiki) => {
        if (payload.wiki_id === wiki.wiki_id) {
          wiki.page_content = payload.page_content
        }
        return wiki
      });
      state.wikis = wikis;
    },
    SEARCH_RESULTS(state, payload) {
      state.search_results = payload;
    },
    SET_DIFFS(state, payload) {
      state.diffs = payload;
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
    getChangelog({commit}, payload) {
      fetch(`/api/changelog/${payload}`)
      .then(blob => blob.json())
      .then((data) => {
        commit('SET_DIFFS', data); 
      });
    },
    changelog({getters}, payload) {
      const wiki = getters.selectWiki(payload.page_slug);
      wiki.updates = payload.page_content;
      return fetch(`/api/changelog/${payload.wiki_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wiki)
      });
    },
    updateWiki({commit, dispatch}, payload) {  
      fetch(`/api/update/${payload.wiki_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        dispatch('changelog', payload).then(() => {
          commit('UPDATE_WIKI', payload)
        })
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
      })
      .then(() => {
        dispatch("getWikis");
      })
      .catch(err => {
        console.log(err);
      }); 
    },
    searchWikis({commit}, payload) {
      fetch(`/api/search?search=${payload}`)
      .then(res => res.json())
      .then(json => {
        commit('SEARCH_RESULTS', json)
      })
      .catch(err => {
        console.log(err);
      }); 
    }
  },
  getters: {
    selectWiki: state => (slug) => {
      return state.wikis.find(wiki => wiki.page_slug === slug);
    },
    selectChangelog: state => (id) => {
      return state.diffs.find(diff => diff.changelog_id === Number(id));
    }
  }
})
