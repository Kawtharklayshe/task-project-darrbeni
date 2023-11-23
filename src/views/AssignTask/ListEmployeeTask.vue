<!-- this is parent  -->
<script>
import {
    BTable,
    
  
 
}
  from 'bootstrap-vue'

import AssignTaskEmp from '@/views/AssignTask/AssignTaskEmp.vue';

export default {
  components: {
    BTable,
    AssignTaskEmp,
    
},
  data() {
    return {
    employeeTasks:[],
     tasks:[],
     fields:['employeeName','tasks'],
     form:{
     employeeName:'',
     startDate:'',
     endDate:'',},
     empTasks:[]
      }
      
    
  },


  methods:{
    updateData(){
        this.employeeTasks = JSON.parse(localStorage.getItem('empTasks')) || [];
        console.log('hi from parent')
        // localStorage.setItem('empTasks',JSON.stringify(this.employeeTasks))
    }
  },
  mounted(){
    // console.log('mounted')
    this.employeeTasks = JSON.parse(localStorage.getItem('empTasks')) || [];
  //  console.log( this.employeeTasks)
  
  }
}
</script>
<template>
    <div>
        {{ employeeTasks }}
        <AssignTaskEmp @updateData="updateData"></AssignTaskEmp>
        <div>
    <b-table striped hover :items="employeeTasks" :fields="fields"></b-table>
  </div>
    </div>
    
</template>