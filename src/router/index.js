import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hani from '@/views/Hani.vue'
import ToDo from '@/views/tasks/TaskList.vue'
import EditTask from '@/views/tasks/EditTask.vue'
import AddEmployee from '@/views/employees/addEmployee.vue' 
import EditEmployee from '@/views/employees/editEmployee.vue'
import AssignTask from '@/views/assignTask/assignTask.vue'
import AssignTaskTable from '@/views/assignTask/assignTaskTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/Hani',
    name: 'Hani',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Hani
  },
  {
    path: '/ToDo',
    name: 'ToDoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ToDo
  },
  {
    path: '/edit/:id',
    name: 'Edit-Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditTask
  },
  {
    path: '/Add-Employee',
    name: 'Add-Employee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddEmployee
  },
  {
    path: '/Edit-Employee/:id',
    name: 'Edit-Employee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditEmployee
  },
  {
    path: '/Assign-Task',
    name: 'Assign-Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AssignTask
  },
  {
    path: '/Assign-Task-Table',
    name: 'Assign-Task-Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AssignTaskTable
  },
]

const router = new VueRouter({
  routes
})

export default router
