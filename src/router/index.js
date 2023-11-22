import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  // creating the route of the EmplyeeListPage
//إضافة الراوت الخاص بصفحة عرض جدول الموظفين 
const routes = [
  {
    path:'/home',
    name:'HomePage',
    component:()=>import('../views/Home/HomePage.vue')
  },
  {
    path:'/employee-page',
    name:'EmployeePage',
    component:()=> import ('../views/Employee/EmployeePage.vue')
  },
  {
    path:'/task-page',
    name:'TaskPage',
    component:()=> import('../views/Task/TaskPage.vue')
  },
  {
    path:'/assignments-page',
    name:'EmployeeAssignmentsPage',
    component:()=> import('../views/Assignments/AssignmentPage.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
