<template>
    <div>
      <!-- Adding the task list component to the page  -->
      <!-- إضافة المكون  *  جدول المهام  * إلى الصفحة  -->
      <task-adding-feature
        @addingTask="
         {taskItems.push({ id: taskItems.length + 1, ...$event }),reloadPage()}">
      </task-adding-feature>
      <task-list :itemsList="taskItemsRetreival"> </task-list>
    </div>
  </template>
  <script lang="js">
  import TaskAddingFeature from '@/components/TaskComponents/TaskAddingFeature.vue';
  import TaskList from '@/components/GeneralComponents/DataTable.vue';
  export default {
      components:{
        TaskList,TaskAddingFeature
      },
      data(){return {
          /*
          Data we are using
          */
           taskItems:JSON.parse(localStorage.getItem('taskItems'))||[]
      }},
      computed:{
          taskItemsRetreival(){ return JSON.parse(localStorage.getItem('taskItems'))||[]}},
      watch:{
           taskItems(){
              localStorage.setItem('taskItems',JSON.stringify(this.taskItems))
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
  