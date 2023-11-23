<template>
  <div>
    <!-- Adding the employee list component to the page  -->
    <!-- إضافة المكون جدول الموظفين إلى الصفحة  -->
    <employee-adding-feature
      @addingEmployee="
       {employeeItems.push({ id: employeeItems.length + 1, ...$event }),reloadPage()}">
    </employee-adding-feature>
    <employee-list :itemsList="employeeItemsRetreival"> </employee-list>
  </div>
</template>
<script lang="js">
import EmployeeAddingFeature from '@/components/EmployeeComponents/EmployeeAddingFeature.vue';
import EmployeeList from '@/components/GeneralComponents/DataTable.vue';
export default {
    components:{
        EmployeeList,EmployeeAddingFeature
    },
    data(){return {
        /*
        Data we are using
        */
        employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[],
        taskItems:[]
    }},
    computed:{
        employeeItemsRetreival(){ return JSON.parse(localStorage.getItem('employeeItems'))||[]},},
    watch:{
          employeeItems(){
             localStorage.setItem('employeeItems',JSON.stringify(this.employeeItems))
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
