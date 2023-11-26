
<script>
 import {
  
  BFormInput,
 
} from 'bootstrap-vue'

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
      firstName:'Nagham',
      dynamicId:14,
      isButtonDisabled:true,
      attributeName:'href',
      url:'https://v2.vuejs.org/v2/guide/syntax',
      seen:true,
      eventName: 'click',
      rawHtml:'<span style="color:blue">nagham</span>'
    }
  },
  
  // eslint-disable-next-line vue/component-api-style
  methods: {
  },
  components:{
    BFormInput
  }
  
}

</script>

<template>
  <div class="container">
    <span>Message: {{ firstName }}</span>
<div v-bind:id="dynamicId"></div>

<button v-bind:disabled="isButtonDisabled">Button</button>

{{ firstName.split('').reverse().join('') }}

<p v-if ="seen">Now you see me (if)</p>
<p v-show ="seen">Now you see me (show)</p>

<!-- <a v-on:[eventName]="doSomething"> link </a> -->
<a @click="doSomething"> link </a>

<!-- <p>Using mustaches: {{ rawHtml }}</p> -->
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

<b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        
  </div>
</template>
