<template>
  <div>
    <b-container class="sticky-top-1">
      <br/>
      <b-row>
        <b-col cols="2" class="feature">
           <!-- Adding the adding items component to the page  -->
      <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
          <employee-adding-feature
          @addingEmployee="addEmployee"
          >
        </employee-adding-feature>  
        </b-col>
        <b-col cols="2" class="feature">
          <!-- Adding the updating items component to the page  -->
          <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
          <employee-updating-feature v-if="employeesExisted" @updatingEmployee="updateEmployee">
          </employee-updating-feature>
        </b-col>
        <b-col cols="2" class="feature">
            <!-- Adding the deleting items component to the page  -->
    <!-- إضافة المكون *حذف العناصر * إلى الصفحة  -->
    <employee-deleting-feature v-if="employeesExisted" @deletingEmployee="deleteEmployee">
    </employee-deleting-feature>
       
        </b-col>
      </b-row>
      <b-row>
        <b-col>
     <!-- Adding the Items list component to the page  -->
      <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
      <data-table :itemsList="employeeItems" class="data-table"></data-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script lang="js">
//Components
import EmployeeAddingFeature from '@/components/EmployeeComponents/EmployeeAddingFeature.vue';
import EmployeeUpdatingFeature from '@/components/EmployeeComponents/EmployeeUpdatingFeature.vue';
import EmployeeDeletingFeature from '@/components/EmployeeComponents/EmployeeDeletingFeature.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        EmployeeAddingFeature,EmployeeUpdatingFeature,EmployeeDeletingFeature
    },
    data(){return {
    }},
    computed:
    {
     ...mapGetters(['employeeItems','employeesExisted'])
    },
    methods:{
    addEmployee($event)
      {
        this.$store.dispatch('addEmployee',{...$event})
      }
      ,
        updateEmployee($event){
        this.$store.dispatch('updateEmployee',{...$event}) 
      }
      ,
      deleteEmployee($event)
      {
        this.$store.dispatch('deleteEmployee',{...$event})
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