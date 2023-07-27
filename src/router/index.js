import { createRouter, createWebHistory } from 'vue-router'


// User
import IndexUser from '../views/user/Index.vue'
import CreateUser from '../views/user/Create.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'

// Student
import IndexStudent from '../views/student/Index.vue'
import CreateStudent from '../views/student/Create.vue'

// Staff
import IndexStaff from '../views/staff/Index.vue'
import CreateStaff from '../views/staff/Create.vue'

// Lecturer
import IndexLecturer from '../views/lecturer/Index.vue'
import CreateLecturer from '../views/lecturer/Create.vue'

// Course
import IndexCourse from '../views/course/Index.vue'
import CreateCourse from '../views/course/Create.vue'

// Finance
import IndexFinance from '../views/finance/Index.vue'
import CreateFinance from '../views/finance/Create.vue'

// Payment
import IndexPayment from '../views/payment/Index.vue'
import CreatePayment from '../views/payment/Create.vue'

// other receipt
import IndexOtherReceipt from '../views/otherReceipt/Index.vue'
import CreateOtherReceipt from '../views/otherReceipt/Create.vue'

// Expense
import IndexExpense from '../views/expense/Index.vue'
import CreateExpense from '../views/expense/Create.vue'

// Expense
import IndexStaffPayment from '../views/staffPayment/Index.vue'
import CreateStaffPayment from '../views/staffPayment/Create.vue'

// Balance
import IndexBalance from '../views/balance/Index.vue'
import CreateBalance from '../views/balance/Create.vue'

// Budget
import IndexBudget from '../views/budget/Index.vue'
import CreateBudget from '../views/budget/Create.vue'

// Activity
import IndexActivity from '../views/activity/Index.vue'
import CreateActivity from '../views/activity/Create.vue'

// Setup/Configurations
import IndexSetup from '../views/setup/Index.vue'
import CreateSetup from '../views/setup/Create.vue'

// Fees 
import IndexFees from '../views/fees/Index.vue'
import CreateFees from '../views/fees/Create.vue'

// Faculty
import IndexFaculty from '../views/faculty/Index.vue'
import CreateFaculty from '../views/faculty/Create.vue'

// Department
import IndexDepartment from '../views/department/Index.vue'
import CreateDepartment from '../views/department/Create.vue'

// Promotion
import IndexPromotion from '../views/promotion/Index.vue'
import CreatePromotion from '../views/promotion/Create.vue'

// Marks
import IndexMark from '../views/mark/Index.vue'
import CreateMark from '../views/mark/Create.vue'

// Academic year
import IndexAcademicYear from '../views/academicYear/Index.vue'
import CreateAcademicYear from '../views/academicYear/Create.vue'


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

  //Fees
  {
    path: '/fees',
    name: 'IndexFees',
    component: IndexFees
  },
  {
    path: '/fees/create',
    name: 'CreateFees',
    component: CreateFees
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

  //OtherRecepit
  {
    path: '/otherRecepit',
    name: 'IndexOtherReceipt',
    component: IndexOtherReceipt
  },
  {
    path: '/otherRecepit/create',
    name: 'CreateOtherReceipt',
    component: CreateOtherReceipt
  },

  //Expense
  {
    path: '/expense',
    name: 'IndexExpense',
    component: IndexExpense
  },
  {
    path: '/expense/create',
    name: 'CreateExpense',
    component: CreateExpense
  },

  //staffPayment
  {
    path: '/staffPayment',
    name: 'IndexStaffPayment',
    component: IndexStaffPayment
  },
  {
    path: '/staffPayment/create',
    name: 'CreateStaffPayment',
    component: CreateStaffPayment
  },

  //balance
  {
    path: '/balance',
    name: 'IndexBalance',
    component: IndexBalance
  },
  {
    path: '/balance/create',
    name: 'CreateBalance',
    component: CreateBalance
  },

  //Budget
  {
    path: '/budget',
    name: 'IndexBudget',
    component: IndexBudget
  },
  {
    path: '/budget/create',
    name: 'CreateBudget',
    component: CreateBudget
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

  //mark
  {
  path: '/mark',
  name: 'IndexMark',
  component: IndexMark
  },
  {
    path: '/mark/create',
    name: 'CreateMark',
    component: CreateMark
  },

  //Academic Year
  {
    path: '/academicYear',
    name: 'IndexAcademicYear',
    component: IndexAcademicYear
  },
  {
    path: '/academicYear/create',
    name: 'CreateAcademicYear',
    component: CreateAcademicYear
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


// Example of Vue Router navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !userIsAuthenticated) {
    // Redirect to the login page or show a 403 Forbidden page
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
