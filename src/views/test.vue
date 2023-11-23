<script>

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
  
  // eslint-disable-next-line vue/component-api-style
  methods: {
    doSomething(){

      console.log('jjfjj')
    },
  
  },
}
</script>

<template>
  <div class="container">
    test
  {{ firstName.split('').reverse().join('') }}

    <!-- <a v-on:click="doSomething"> click me </a> -->
<a v-bind:[attributeName]="url"> ... </a>

   <p v-if="isButtonDisabled">Now you see me v-if</p>
    
   <p v-show="isButtonDisabled">Now you see me v-show</p>
  </div>
</template>