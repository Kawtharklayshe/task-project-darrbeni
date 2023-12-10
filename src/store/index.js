import Vue from 'vue'
import Vuex from 'vuex'
import tasksModule from '@/store/Modules/tasksModule'
import employeesModule from '@/store/Modules/employeesModule'
import assignmentsModule from '@/store/Modules/assignmentsModule'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'
Vue.use(Vuex)

//root store 
export default new Vuex.Store(
  {
  state: {
    historyItems:JSON.parse(localStorage.getItem('historyItems'))||[]
  },
  getters: getters,
  mutations:mutations,
  actions: actions,
  modules:{
    tasksModule:tasksModule, 
    employeeModule:employeesModule,
    assignmentModule:assignmentsModule
  },}
)
