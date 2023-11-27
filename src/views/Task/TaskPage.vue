<template>
  <div>
      <!-- Adding the adding items component to the page  -->
      <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
      <task-adding-feature
      @addingTask="
        {
          taskItems.push({ id: taskItems.length + 1, ...$event }), reloadPage();
        }
      "
    >
    </task-adding-feature>
    <br />
      <!-- Adding the updating items component to the page  -->
      <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
      <task-updating-feature v-if="tasksExisted" @updatingTask="updateTask"> </task-updating-feature>

      <!-- Adding the items list component to the page  -->
      <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
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
    },
    computed:{
      taskItems(){
        return JSON.parse(localStorage.getItem('taskItems'))||[]
      }
    }
  },
    methods:{
      //Updater
        updateTask($event){
          if((({...$event}.id-1)<this.taskItems.length)&&(({...$event}.id-1)>=0 ))
          {
            if ({...$event}.name!="")
              this.taskItems[{...$event}.id-1].name={...$event}.name;
            if ({...$event}.description!="")
              this.taskItems[{...$event}.id-1].description={...$event}.description;
            if ({...$event}.duration!="")
              this.taskItems[{...$event}.id-1].duration={...$event}.duration;
            if ({...$event}.difficulty!="")
              this.taskItems[{...$event}.id-1].difficulty={...$event}.difficulty;
            if ({...$event}.startDate!="")
             this.taskItems[{...$event}.id-1].startDate={...$event}.startDate;
            if ({...$event}.endDate!="")
             this.taskItems[{...$event}.id-1].endDate={ ...$event }.endDate;
            localStorage.setItem('taskItems',JSON.stringify(this.taskItems));
          }
          else
          {
            alert("you entered a bad id")
          }
      }
    }
}
</script>
