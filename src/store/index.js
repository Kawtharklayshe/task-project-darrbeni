import Vue from 'vue'
import Vuex from 'vuex'
import likeModule from './likeModule';
import taskModule from './modules/taskModules';

Vue.use(Vuex);
// تعريف instance من VueX
const module = {
  state:{
      liked:false,
      likes:10
  },
  getters:{
      liked(state){
          return state.liked
      },
      likes(state){
          return state.likes
      }
  },
  mutations:{
      toggleLike(state){
          state.liked = !state.liked
      },
      increaseLike(state){
          state.likes++;
      },
      decreaseLike(state){
          state.likes--;
      }
  },
  actions:{
      toggleLike1(context){
          context.commit('toggleLike')
          if(context.state.liked)
          context.commit('increaseLike')
      else context.commit('decreaseLike')
      }
  }
}
const store = new Vuex.Store({
  state: {
    counter : 0
  },
  getters: {
    Counter(state){
      return state.counter;
    },
    doubleCount(state){
      return state.counter * 2;
    },
    multiCounter: state => multi => {
      return state.counter * multi;
    }
  },
  mutations: {
    decrease(state){
      state.counter++
    },
    increase(state){
      state.counter--
    },
    mult(state, payload){
      state.counter *= payload.mount;
    }
  },
  actions: {
    increment (context) {
      context.commit('increase')
    }
  },
  modules: {
  // likes:module
    likes:likeModule,
    tasks:taskModule
  }
})
export default store

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
