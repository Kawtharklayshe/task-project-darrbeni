<script>
import 
  Card from '@/views/Employees/Card.vue'
  
  export default {
  components: {
    Card,

  },
  methods:{
print(){
  console.log('hi im from child ${data}')
}
  },
  props:{
    employees: Array,
  }
  }
</script>

<template>
<div class="container py-5">
  <div class="row">
<div class= "col-3  m-1 card-div" v-for="emp in employees">
<Card :employee="emp" @getData="print"></Card>
</div>
</div>
</div>

</template>
<style>
    body{
      background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
    }
    .card-div{
      width: 30%;
      
    }
</style>