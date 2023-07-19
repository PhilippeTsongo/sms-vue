import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'

import IndexStudent from '../views/student/Index.vue'
import CreateStudent from '../views/student/Create.vue'
import IndexStaff from '../views/staff/Index.vue'
import CreateStaff from '../views/staff/Create.vue'
import IndexLecturer from '../views/lecturer/Index.vue'
import CreateLecturer from '../views/lecturer/Create.vue'
import IndexCourse from '../views/course/Index.vue'
import CreateCourse from '../views/course/Create.vue'
import IndexFinance from '../views/finance/Index.vue'
import CreateFinance from '../views/finance/Create.vue'
import IndexActivity from '../views/activity/Index.vue'
import CreateActivity from '../views/activity/Create.vue'
import IndexSetup from '../views/setup/Index.vue'
import CreateSetup from '../views/setup/Create.vue'
import IndexUser from '../views/setup/Index.vue'
import CreateUser from '../views/setup/Create.vue'
// import IndexClass from '../views/class/Index.vue'
// import CreateClass from '../views/class/Create.vue'
import IndexPayment from '../views/payment/Index.vue'
import CreatePayment from '../views/payment/Create.vue'



import IndexFaculty from '../views/faculty/Index.vue'
import CreateFaculty from '../views/faculty/Create.vue'
import IndexDepartment from '../views/department/Index.vue'
import CreateDepartment from '../views/department/Create.vue'
import IndexPromotion from '../views/promotion/Index.vue'
import CreatePromotion from '../views/promotion/Create.vue'



const routes = [
  
  //appIndex
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //login
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  //logout
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },

  //user
  {
    path: '/user',
    name: 'IndexUser',
    component: IndexUser
  },
  {
    path: '/user/create',
    name: 'CreateUser',
    component: CreateUser
  },

  //about
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //student
  {
    path: '/student',
    name: 'IndexStudent',
    component: IndexStudent
  },
  {
    path: '/student/create',
    name: 'CreateStudent',
    component: CreateStudent
  },

  //staff
  {
    path: '/staff',
    name: 'IndexStaff',
    component: IndexStaff
  },
  {
    path: '/staff/create',
    name: 'CreateStaff',
    component: CreateStaff
  },

  //lecturer
  {
    path: '/lecturer',
    name: 'IndexLecturer',
    component: IndexLecturer
  },
  {
    path: '/lecturer/create',
    name: 'CreateLecturer',
    component: CreateLecturer
  },

  //course
  {
    path: '/course',
    name: 'IndexCourse',
    component: IndexCourse
  },
  {
    path: '/course/create',
    name: 'CreateCourse',
    component: CreateCourse
  },

  //finance
  {
    path: '/finance',
    name: 'IndexFinance',
    component: IndexFinance
  },
  {
    path: '/finance/create',
    name: 'CreateFinance',
    component: CreateFinance
  },

  //activity
  {
    path: '/activity',
    name: 'IndexActivity',
    component: IndexActivity
  },
  {
    path: '/activity/create',
    name: 'CreateActivity',
    component: CreateActivity
  },

  //setup
  {
    path: '/setup',
    name: 'IndexSetup',
    component: IndexSetup
  },
  {
    path: '/setup/create',
    name: 'CreateSetup',
    component: CreateSetup
  },

  //payment
  {
    path: '/payment',
    name: 'IndexPayment',
    component: IndexPayment
  },
  {
    path: '/payment/create',
    name: 'CreatePayment',
    component: CreatePayment
  },

  //faculty
  {
    path: '/faculty',
    name: 'IndexFaculty',
    component: IndexFaculty
  },
  {
    path: '/faculty/create',
    name: 'CreateFaculty',
    component: CreateFaculty
  },

  //department
  {
    path: '/department',
    name: 'IndexDepartment',
    component: IndexDepartment
  },
  {
    path: '/faculty/create',
    name: 'CreateDepartment',
    component: CreateDepartment
  },

  
  //promotion
  {
    path: '/promotion',
    name: 'IndexPromotion',
    component: IndexPromotion
  },
  {
    path: '/promotion/create',
    name: 'CreatePromotion',
    component: CreatePromotion
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
