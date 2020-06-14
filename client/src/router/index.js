import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue';
import Store from '../store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/Create.vue')
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
    path: '/page/:id',
    name: 'Page',
    component: () => import(/* webpackChunkName: "content" */ '../views/Page.vue')
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import(/* webpackChunkName: "markdown" */ '../views/Markdown.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/diff/:id',
    name: 'Diff',
    component: () => import(/* webpackChunkName: "diff" */ '../views/Diffs.vue')
  },
  {
    path: '*',
    name: "NoPage",
    component: () => import(/* webpackChunkName: "nopage" */ '../views/NoPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (!Store.state.wikis) {
    Store.dispatch('getWikis');
  }
  next();
});

export default router
