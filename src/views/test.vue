<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      firstName:'kawthar',
      dynamicId:14,
      isButtonDisabled:false,
      attributeName:'href',
      url:'https://v2.vuejs.org/v2/guide/syntax'
    }
  },
  computed:{
    ...mapGetters(['Counter', 'doubleCount', 'liked', 'likes']),
    // Counter(){
    //   return this.$store.state.counter;
    // },
     
    // doubleCount(){
    //   return this.$store.getters.double;
    // },
    multiCounter(){
      return this.$store.getters.multiCounter(4);
    },
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
 ...mapMutations(['decrease']),
 toggleLike(){
            console.log('dcdndfjkz');
            this.$store.dispatch('toggleLike1')
        },
  // decrease(){
  //   this.$store.commit('decrease')
  //   // this.$store.state.counter++;
  // },
  // increase(){
  //   this.$store.state.counter--;
  // },

  increase(){
    this.$store.dispatch('increment')
  },
   mult(){
    this.$store.commit('mult',{mount: 10})
  }
  },
}
</script>

<template>
  <div class="container"> 
    hi from VueX test 
        <br>
        <button v-if="liked" @click="toggleLike"> UnLike </button>
        <button  v-if="! liked" @click="toggleLike"> Like </button>

        <div>
            {{ likes }}  Likes
        </div>

    <hr>
    <p>{{ Counter }}</p>
    <p>Double Counter =  {{ doubleCount }}</p>
    <p>Counter * 4 =  {{ multiCounter }}</p>

    <button @click="decrease" > Decrease</button>
    <button @click="increase"> Increase</button>

    <button @click="mult"> ByMutaionPayLoad</button>
<!-- 
    test
  {{ firstName.split('').reverse().join('') }}

     <a v-on:click="doSomething"> click me </a> 
<a v-bind:[attributeName]="url"> ... </a>

   <p v-if="isButtonDisabled">Now you see me v-if</p>
    
   <p v-show="isButtonDisabled">Now you see me v-show</p> -->

  </div>
</template>
<style>
button{
  margin: 20px;
  padding: 5px;
  color: white;
  background-color: black;
}
</style>