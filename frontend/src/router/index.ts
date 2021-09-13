import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user-edit/:id',
    name: 'UserEditView',
    component: () => import(/* webpackChunkName: "UserEditView" */ '../components/UserEditView.vue')
  },
  {
    path: '/user-add',
    name: 'UserAddForm',
    component: () => import(/* webpackChunkName: "UserAddForm" */ '../components/UserAddForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
