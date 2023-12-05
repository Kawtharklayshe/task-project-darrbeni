import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import likesModule from '@/store/modules/likesModule'
import assignTaskModule from './modules/assignTaskModule'
import tasksModule from './modules/tasksModule'
import employeesModule from './modules/employeesModule'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state,
  getters ,
  mutations,
  actions,
  modules: {
    likesModule,
    assignTaskModule,
    tasksModule,
    employeesModule
  }
})

export default store;
