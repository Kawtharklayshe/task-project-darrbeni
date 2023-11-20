import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  // creating the route of the EmplyeeListPage
//إضافة الراوت الخاص بصفحة عرض جدول الموظفين 
const routes = [
  {
    path:'/employee-list-page',
    name:'EmployeeListPage',
    component:()=> import ('../views/EmployeeListPage')
  }
]


const router = new VueRouter({
  routes
})

export default router
