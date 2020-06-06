import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../store';
import store from '../store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
  {
    path: '/history/:id',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/content/:id',
    name: 'Content',
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import(/* webpackChunkName: "markdown" */ '../views/Markdown.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.wikis) {
    Store.dispatch('getWikis');
  }
  next();
});

export default router
