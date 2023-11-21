import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditTask from '../views/addTask/edittask.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/addtask',
    name: 'addtask',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/addTask/addTask.vue'),
  },
  { 
    path: '/edit/:id', 
  component: EditTask, 
  
  name: 'edit-task' 
},
  {
    path: '/task-list',
    name: 'task-list',
    component: () => import('../views/tasks/TaskList.vue'),
  },
  {
    path: '/add-employee',
    name: 'add-employee',
    component: () => import('../views/employee/AddEmployee.vue'),
  },

  {
    path: '/list',
    name: 'list',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/addTask/list.vue'),
  },
  {
    path: '/about',
    name: 'about',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
  },
]

const router = new VueRouter({
  routes,
})

export default router
