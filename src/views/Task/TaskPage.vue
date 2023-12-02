<template>
  <div>
    <b-container class="sticky-top-1">
      <b-row class="row1">
        <b-col cols="2" clss="feature">
              <!-- Adding the adding items component to the page  -->
      <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
      <task-adding-feature @addingTask="addTask">
      </task-adding-feature>
        </b-col>
        <b-col cols="2" class="feature">
              <!-- Adding the updating items component to the page  -->
      <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
      <task-updating-feature v-if="tasksExisted" @updatingTask="updateTask"> </task-updating-feature>
        </b-col>
        <b-col cols="2" class="feature">
            <!-- Adding the deleting items component to the page  -->
      <!-- إضافة المكون * حذف العناصر * إلى الصفحة  -->
      <task-deleting-feature v-if="tasksExisted" @deletingTask="deleteTask"> </task-deleting-feature>
     
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- Adding the items list component to the page  -->
      <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
    <data-table :itemsList="taskItems" class="data-table"></data-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="js">
//Components
import TaskAddingFeature from '@/components/TaskComponents/TaskAddingFeature.vue';
import TaskUpdatingFeature from '@/components/TaskComponents/TaskUpdatingFeature.vue';
import TaskDeletingFeature from '@/components/TaskComponents/TaskDeletingFeature.vue';
//Mixins
import Mixin from '@/mixins/mixin'
export default {
  mixins:[Mixin],
    components:{
      TaskAddingFeature,
      TaskUpdatingFeature,
      TaskDeletingFeature
    },
    data(){return { 
      taskItems:JSON.parse(localStorage.getItem('taskItems'))||[]
     }},
    watch:{
       taskItems(){
         localStorage.setItem('taskItems',JSON.stringify(this.taskItems))
     }
    },
    computed:{
      tasksExisted()
      {
        if((JSON.parse(localStorage.getItem('taskItems'))||[]).length==0) return false;
      else return true;
      },
      taskItems(){
        return JSON.parse(localStorage.getItem('taskItems'))||[]
      }
    },
    methods:{
      reloadPage()
      {
        window.location.reload()
      },
      addTask($event)
      {
        this.taskItems.push({ id: this.taskItems.length + 1, ...$event });
        if(this.taskItems.length==1)
            this.reloadPage();
          //updating history
        this.historyItems.push({id:this.historyItems.length+1,
          details:`You added the Task :${{...$event}.name}`})
      },
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
             //updating history 
             this.historyItems.push({id:this.historyItems.length+1,
            details:`You have updated the Task :${{...$event}.name}`}) 
            localStorage.setItem('taskItems',JSON.stringify(this.taskItems));
          
          }
          else
          {
            alert("you entered a bad id")
          }
      },
      deleteTask($event)
      {
        console.log({...$event}.id);
        if((({...$event}.id)<this.taskItems.length)&&(({...$event}.id)>=0 ))
          {
              //updating history
          this.historyItems.push({id:this.historyItems.length+1,
          details:`You have deleted the Task :${this.taskItems[{...$event}.id].name} `}) 
            this.taskItems=this.taskItems.slice(0,{...$event}.id).concat(this.taskItems.slice({...$event}.id+1,this.taskItems.length));
            this.taskItems.filter((el) => el.id>{...$event}.id).map((el) => el.id--);
            localStorage.setItem('taskItems',JSON.stringify(this.taskItems));
            if({...$event}.id==0)
            this.reloadPage();
          }
        else
          {
            alert("you entered a bad id")
          }
      }
    }
}
</script>
<style>
.row1
{
  margin-left: -45px;
}
.sticky-top-1
{
  position: sticky;
  top: 100px;
  height: 0px;
}
.feature{
  width: 12%;
  height: 80px;
}
</style>