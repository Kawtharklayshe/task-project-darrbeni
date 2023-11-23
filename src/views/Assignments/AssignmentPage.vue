<template>
    <div>
      <!-- Adding the assignments list component to the page  -->
      <!-- إضافة المكون * جدول التكليفات * إلى الصفحة  -->
      <assignment-adding-feature
         :taskItems="taskItemsRetrieval"
         :employeeItems="employeeItemsRetrieval"
        @addingAssignment="
         {assignmentItems.push({ id: assignmentItems.length + 1, ...$event }),reloadPage()}">
      </assignment-adding-feature>
      <assignment-list :itemsList="assignmentItemsRetrieval"> </assignment-list>
     <h1>{{taskItems}}</h1>
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
          taskItemsRetrieval(){return JSON.parse(localStorage.getItem('taskItems'))||[]},
          employeeItemsRetrieval(){return JSON.parse(localStorage.getItem('employeeItems'))||[]},  
          assignmentItemsRetrieval(){ return JSON.parse(localStorage.getItem('assignmentItems'))||[]},},
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
  