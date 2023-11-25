<template>
    <div>
<!-- Adding the adding task feature component to the page  -->
<!-- إضافة المكون  *  ميزة إضافة موظف  * إلى الصفحة  -->
      <task-adding-feature 
        @addingTask="
         {taskItems.push({ id: taskItems.length + 1, ...$event }),reloadPage()}">
      </task-adding-feature>

    <!-- taskUpdatingFeature -->
      <!-- <task-updating-feature
      @updatingTask="
       {
    taskItems[{...$event}.id]={ ...$event },reloadPage()}">
    </task-updating-feature>
     -->
<!-- Adding the task list component to the page  -->
<!-- إضافة المكون  *  جدول المهام  * إلى الصفحة  -->
    <data-table :itemsList="taskItems"></data-table>
    </div>
  </template>
  <script lang="js">
  import TaskAddingFeature from '@/components/TaskComponents/TaskAddingFeature.vue';
  import TaskUpdatingFeature from '@/components/TaskComponents/TaskUpdatingFeature.vue';

  export default {
      components:{
        TaskAddingFeature,
        TaskUpdatingFeature
      },
      data(){
        return {
          taskItems:JSON.parse(localStorage.getItem('taskItems'))||[]
      }},
          watch:{
           taskItems(){
              localStorage.setItem('taskItems',JSON.stringify(this.taskItems))
           }
      }
      ,
      computed:{
        tasksExisted()
        {
          if((JSON.parse(localStorage.getItem('taskItems'))||[]).length==0) return false;
        else return true;
      }},
//This Method is used for reloding the page so we can get the data displayed
      methods:{
          reloadPage()
          {
              window.location.reload();
          }
        }
  }
  </script>
  