<template>
  <div>
    <!-- Adding the employee adding component to the page  -->
    <!-- إضافة المكون * إضافةالموظفين * إلى الصفحة  -->
    <employee-adding-feature
      @addingEmployee="
       {employeeItems.push({ id: employeeItems.length + 1, ...$event }),reloadPage()}">
    </employee-adding-feature>

    <!-- Adding the employee adding component to the page  -->
    <!-- إضافة المكون * إضافةالموظفين * إلى الصفحة  -->
    <data-table :itemsList="employeeItems"></data-table>
  </div>
</template>
<script lang="js">
import EmployeeAddingFeature from '@/components/EmployeeComponents/EmployeeAddingFeature.vue';
export default {
    components:{
        EmployeeAddingFeature
    },
    data(){return {
        employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[],
    }},
    watch:
        {
          employeeItems:function(){
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
