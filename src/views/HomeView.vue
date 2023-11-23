<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <a  :[attrName]="url" target="_blank">Link</a>
    <button  @[eventName]="doSomething()">Do Something</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      isButtonDisabled: true,
      url: "https://vuejs.org/guide/essentials/template-syntax.html",
      attrName: 'href',
      eventName: 'dblclick'
    };
  },
  methods: {
    doSomething() {
      console.log("hi");
    }
  }
}
</script>
