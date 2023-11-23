import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import editTask from '../views/Tasks/editTask.vue'

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
    path: '/test',
    name: 'test',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/test.vue')
    }
  },
  {
    path: '/TaskList',
    name: 'TaskList',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Tasks/TaskList.vue')
    }
  },  {
    path: '/maya',
    name: 'maya',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/maya.vue')
    }
  },
  {
    path: '/edit/:id',
    component: editTask,
    name:'editTask'
  },
  {
    path: '/employees',
    name: 'employees',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Employees/employeeCards.vue')
    }
  },
  {
    path: '/card',
    name: 'card',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Employees/Card.vue')
    }},
    {
      path: '/list',
      name: 'list',
      component: function () {
        return import(/* webpackChunkName: "about" */ '../views/Employees/CardList.vue')
      }
  },
  {
    path: '/EditEmployee/:id',
    name: "EditEmployee",
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Employees/EditEmployee.vue')
    }
  },
  {
    path: '/assign',
    name: "assign",
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AssignTask/AssignTaskEmp.vue')
    }
  },
  {
    path: '/listforEmployee',
    name: "listforEmployee",
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AssignTask/ListEmployeeTask.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
