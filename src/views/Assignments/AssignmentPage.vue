<template>
  <div>
    <b-container class="sticky-top-1">
      <br/>
      <b-row>
        <b-col cols="2" class="feature">
               <!-- Adding the adding items component to the page  -->
    <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
    <assignment-adding-feature
    :taskItems="taskItems"
    :employeeItems="employeeItems"
    @addingAssignment="addAssignment"
  >
  </assignment-adding-feature>
        </b-col>
        <b-col cols="2" class="feature">
              <!-- Adding the updating items component to the page  -->
    <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
    <assignment-updating-feature
    :taskItems="taskItems"
    :employeeItems="employeeItems"
    v-if="assignmentsExisted"
    @updatingAssignment="updateAssignment"
  >
  </assignment-updating-feature>
        </b-col>
        <b-col cols="2" class="feature">
          <assignment-deleting-feature
          v-if="assignmentsExisted"
          @deletingAssignment="deleteAssignment">
          </assignment-deleting-feature> 
        </b-col>
      </b-row>
      <b-row>
        <b-col>
    <!-- Adding the items list component to the page  -->
    <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
    <data-table :itemsList="assignmentItems" class="data-table"> </data-table>
        </b-col>
      </b-row>
    </b-container>  
  </div>
</template>
<script lang="js">
//Components
import AssignmentAddingFeature from '@/components/AssignmentsComponents/AssignmentAddingFeature.vue';
import AssignmentUpdatingFeature from '@/components/AssignmentsComponents/AssignmentUpdatingFeature.vue';
import AssignmentDeletingFeature from '@/components/AssignmentsComponents/AssignmentDeletingFeature.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        AssignmentAddingFeature,AssignmentUpdatingFeature,AssignmentDeletingFeature
    },
    data(){return {}
    },
    computed:{
      ...mapGetters(['assignmentItems','taskItems','employeeItems','assignmentsExisted'])
    },
    methods:{
    addAssignment($event)
      {
       this.$store.dispatch('addAssignment',$event)
      }
      ,
      updateAssignment($event){
          this.$store.dispatch('updateAssignment',$event)    
    },
    deleteAssignment($event)
    {
       this.$store.dispatch('deleteAssignment',$event)
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