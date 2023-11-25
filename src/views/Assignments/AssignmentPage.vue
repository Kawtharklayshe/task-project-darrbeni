<template>
    <div>
      <!-- Adding the assignments list component to the page  -->
      <!-- إضافة المكون * جدول التكليفات * إلى الصفحة  -->
      <assignment-adding-feature
         :taskItems="taskItems"
         :employeeItems="employeeItems"
        @addingAssignment="
         {assignmentItems.push({ id: assignmentItems.length + 1, ...$event }),reloadPage()}">
      </assignment-adding-feature>
      <data-table :itemsList="assignmentItems" > </data-table>
     
    </div>
  </template>
  <script lang="js">
  import AssignmentAddingFeature from '@/components/AssignmentsComponents/AssignmentAddingFeature.vue';
  export default {
      components:{
          AssignmentAddingFeature
      },
      data(){return {
          /*
          Data we are using
          */
         assignmentItems:JSON.parse(localStorage.getItem('assignmentItems'))||[],
         taskItems:JSON.parse(localStorage.getItem('taskItems'))||[],
         employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[]
      }},
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
  