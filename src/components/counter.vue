<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['counter','doubleCounter']),
    //   counter() {
    //  return this.$store.state.counter;
    //   }   ,
    //  doubleCounter(){
    //     return this.$store.getters.doubleCounter
    // },
    multicounter(){
        return this.$store.getters.multicounter(4)
    },
    ulticounter(){
        return this.$store.getters.fname('h')
    }

    },
     methods : {
     increased:function(){
         this.$store.commit('increase')
     },
     decreased:function(){
         this.$store.commit('decrease',{mount:5})
     },
     increament:function(){
         this.$store.dispatch('increament')
     },
    // decreased:function(){
    //      this.$store.state.counter--
    //  },
    },
    data() {
        return {
            c:3
        }
    }

}


</script>
<template>
    <div>
        <h2 class="foned mb-3">_______Vuex_______ </h2>
       <b-button @click="increased()" class="me-3 mb-2" variant="outline-warning">increased</b-button>
      <b-button @click="decreased()" class="me-3 mb-2" variant="outline-danger">decreased</b-button>
      <b-button @click="increament()" class="me-3 mb-2" variant="outline-danger">increament</b-button>
      <p class="foned">increased or decreaced  by one : <b-avatar  class="avatars">{{counter}}</b-avatar></p>
      <p class="foned">multple by two : <b-avatar  class="avatars">{{doubleCounter}}</b-avatar></p>
      <p class="foned">multple by four :  <b-avatar  class="avatars">{{multicounter}}</b-avatar></p>
   <p class="foned">multple by four :  <b-avatar  class="avatars">{{increament}}</b-avatar></p>
   <div>{{ulticounter}}</div>
    </div>
</template>
<style scoped>
  .foned{
    font-family: cursive;
    
  }
  .avatars{
    background-color: #ffc10786;
  }

</style>