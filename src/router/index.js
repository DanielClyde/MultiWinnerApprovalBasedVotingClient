import { createRouter, createWebHistory } from 'vue-router'
import VoterList from '../views/VoterList.vue'

const routes = [
  {
    path: '/',
    name: 'voter-list',
    component: VoterList,
  },
  {
    path: '/simulation',
    name: 'search-simulation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SearchSimulation.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
