<template>
  <div>
    <b-container class="sticky-top-1">
      <br/>
      <b-row>
        <b-col cols="2" class="feature">
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
//Store
import { mapGetters} from 'vuex';
export default {
    components:{
      TaskAddingFeature,
      TaskUpdatingFeature,
      TaskDeletingFeature
    },
    data(){return { 

     }},
    computed:{
      ...mapGetters(['taskItems','tasksExisted']),
    },
    methods:{
      addTask($event)
      {
        this.$store.dispatch('addTask',{...$event})
      },
       updateTask($event){
        this.$store.dispatch('updateTask',{...$event})
      },
      deleteTask($event)
      {
         this.$store.dispatch('deleteTask',$event)
      }
    }
}
</script>
<style>
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