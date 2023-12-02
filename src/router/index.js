import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  // creating the routes
const routes = [
  {
    path:'/',
    name:'HomePage',
    component:()=>import('../views/Home/HomePage.vue')
  },
  {
    path:'/employees',
    name:'EmployeePage',
    component:()=> import ('../views/Employee/EmployeePage.vue')
  },
  {
    path:'/tasks',
    name:'TaskPage',
    component:()=> import('../views/Task/TaskPage.vue')
  },
  {
    path:'/assignments',
    name:'AssignmentsPage',
    component:()=> import('../views/Assignments/AssignmentPage.vue')
  },
  {
    path:'/history',
    name:'HistoryPage',
    component:()=> import('../views/History/HistoryPage.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
