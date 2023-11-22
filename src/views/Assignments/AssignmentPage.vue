<template>
    <div>
      <!-- Adding the assignments list component to the page  -->
      <!-- إضافة المكون * جدول التكليفات * إلى الصفحة  -->
      <assignment-adding-feature
         :taskItems="((taskItems.map(el=>{return el.name || [] })))"
         :employeeItems="(employeeItems.map(el=>{return el.fname||[]}))"
        @addingAssignment="
         {assignmentItems.push({ id: assignmentItems.length + 1, ...$event }),reloadPage()}">
      </assignment-adding-feature>
      <assignment-list :itemsList="assignmentItemsRetreival"> </assignment-list>
    </div>
  </template>
  <script lang="js">
  import AssignmentAddingFeature from '@/components/AssignmentsComponents/AssignmentAddingFeature.vue';
  import AssignmentList from '@/components/GeneralComponents/DataTable.vue';
  export default {
      components:{
          AssignmentList,AssignmentAddingFeature
      },
      data(){return {
          /*
          Data we are using
          */
         assignmentItems:JSON.parse(localStorage.getItem('assignmentItems')||[]),
         taskItems:JSON.parse(localStorage.getItem('taskItems')||[]),
         employeeItems:JSON.parse(localStorage.getItem('employeeItems')||[])
      }},
      computed:{
          assignmentItemsRetreival(){ return JSON.parse(localStorage.getItem('assignmentItems'))||[]},},
      watch:{
        assignmentItems(){
              localStorage.setItem('assignmentItems',JSON.stringify(this.assignmentItems))
           }
      },
      methods:{
          reloadPage()
          {
              window.location.reload();
          }
      }
  }
  
  </script>
  