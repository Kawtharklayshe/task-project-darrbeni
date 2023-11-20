this page has been made for dis
<template>
    <div>
        <div id="employeeListPage">
             <!-- Adding the employee list component to the page  -->
        <!-- إضافة المكون جدول الموظفين إلى الصفحة  -->
            <employee-list>
       
            </employee-list>
        </div>
     
    </div>
</template>
<script lang="js">
import EmployeeList from '@/components/EmployeeList.vue';
export default {
    el:'#employeeListPage',
    components:{
        EmployeeList
    },
    data(){
      
    },
    computed:{

    },
    watch:
    {
        
    }
}
</script>

