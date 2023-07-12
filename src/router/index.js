import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Index from '../views/students/Index.vue'
import Create from '../views/students/Create.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //student
  {
    path: '/student',
    name: 'student',
    component: Index
  },
  {
    path: '/student/create',
    name: 'create_student',
    component: Create
  },

  //lecturer
  {
    path: '/lecturer',
    name: 'lecturer',
    component: Index
  },
  {
    path: '/lecturer/create',
    name: 'create_lecturer',
    component: Create
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
