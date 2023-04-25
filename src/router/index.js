import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import(/* webpackChunkName: "about" */ '../views/SkillView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperienceView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
