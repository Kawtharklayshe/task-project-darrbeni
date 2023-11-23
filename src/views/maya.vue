<script>

export default {
  
  data() {
    return {
  name: "maya",
    skills: ["Html","CSS","JS"],
    marks: [
        {
            subName: "Java",
            subMark: 95,
        },
        {
            subName: "C++",
            subMark: 98,
        }
    ],
    isCompleted:true,
    rawHtml: "using v-html <span style='color: red'>This should be red.</span>",
    dynamicId: "my-class",
    isButtonDisabled: false,

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
  <h1>Test</h1>
 <p>{{"example for text with Vue " +  name }} </p>
 {{ "example for string method " + name.toUpperCase() }}
 <p>{{ skills[0] }} from Array</p>
 <p>{{ marks[0].subName }} :  {{ marks[0].subMark }}  from object</p>
 <p> example to boolean with short if {{ isCompleted ? '"it is true"' : "No" }}</p>
<p> using text intro:  {{ rawHtml }}</p>
<p v-html="rawHtml"></p>
<div v-bind:class="dynamicId"> {{ dynamicId }}</div>
<button :disabled="isButtonDisabled" >Button</button>
  
  </div>
</template>