import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RSVPList from '../views/RSVPListView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rsvps',
    name: 'rsvps',
    component: RSVPList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
