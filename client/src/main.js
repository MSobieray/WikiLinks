import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'github-markdown-css/github-markdown.css'
import router from './router'
import store from './store'
import {slugIt} from './filters';
import {formatDate} from './filters';
Vue.config.productionTip = false

Vue.filter('slugIt', slugIt);
Vue.filter('formatDate', formatDate);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
