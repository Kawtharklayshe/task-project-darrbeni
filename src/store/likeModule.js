import Vue from 'vue'
import Vuex from 'vuex'

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
        toggleLike(context){
            context.commit('toggleLike')
            if(context.state.liked)
            context.commit('increaseLike')
        else context.commit('decreaseLike')
        }
    }
}
export default module;