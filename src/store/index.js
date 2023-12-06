import Vue from 'vue'
import Vuex from 'vuex'
import taskModule from './modules/taskModule'
import employeeModule from './modules/employeeModule'
import assignModule from './modules/assignModule'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    counter:0,
    fname:'gdfsgs'
  },
  getters: {
    fname:(state)=>(letters)=>{
      return state.fname.charAt(0) +letters
    },
    counter(state){
      return state.counter
    },
    doubleCounter(state){
      return state.counter *2
    },
    multicounter : state=>multi=>{
      return state.counter*multi 
    }
  },
  mutations: {
    increase(state){
      state.counter++
    },
    decrease(state,payload){
      state.counter-=payload.mount
    },
    increment (state) {
      state.counter+=10
    }
  },
  actions: {
    increament(context){
      context.commit('increament')
    }
  },
  modules: {
   task : taskModule,
   employee : employeeModule,
   assign: assignModule,
  }
})
