<template>
  <div>
      <!-- Adding the adding items component to the page  -->
      <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
    <employee-adding-feature
      @addingEmployee="
       {employeeItems.push({ id: employeeItems.length + 1, ...$event }),reloadPage()}">
    </employee-adding-feature>
    <br/>
    <!-- Adding the updating items component to the page  -->
    <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
    <employee-updating-feature v-if="employeesExisted" @updatingEmployee="updateEmployee">
    </employee-updating-feature>
     <!-- Adding the Items list component to the page  -->
      <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
    <data-table :itemsList="employeeItems"></data-table>
  </div>
</template>
<script lang="js">
import EmployeeAddingFeature from '@/components/EmployeeComponents/EmployeeAddingFeature.vue';
import EmployeeUpdatingFeature from '@/components/EmployeeComponents/EmployeeUpdatingFeature.vue';
export default {
    components:{
        EmployeeAddingFeature,EmployeeUpdatingFeature
    },
    data(){return {
        employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[],
    }},
    watch:
        {
          employeeItems:function(){
             localStorage.setItem('employeeItems',JSON.stringify(this.employeeItems))
        }
    }
    ,
    computed:
    {
      employeeItems(){
        return JSON.parse(localStorage.getItem('employeeItems'))||[]
      },
      employeesExisted()
      {
        if((JSON.parse(localStorage.getItem('employeeItems'))||[]).length==0) return false;
      else return true;
    }
    },
    methods:{
        updateEmployee($event){
            if((({...$event}.id-1)<this.employeeItems.length)&&(({...$event}.id-1)>=0 ))
             {
            if ({...$event}.fname!="")
              this.employeeItems[{...$event}.id-1].fname={...$event}.fname;
            if ({...$event}.lname!="")
              this.employeeItems[{...$event}.id-1].lname={...$event}.lname;
              if ({...$event}.age!="")
              this.employeeItems[{...$event}.id-1].age={...$event}.age;
            if ({...$event}.startDate!="")
              this.employeeItems[{...$event}.id-1].startDate={...$event}.startDate;
            if ({...$event}.ex!="")
             this.employeeItems[{...$event}.id-1].ex={...$event}.ex;
            if ({...$event}.endDate!="")
             this.employeeItems[{...$event}.id-1].endDate={...$event}.endDate
             if ({...$event}.email!="")
              this.employeeItems[{...$event}.id-1].email={...$event}.email;
            localStorage.setItem('employeeItems',JSON.stringify(this.employeeItems))
          }
          else
          {
            alert("you entered a bad id")
          }
      }
    }
}
</script>
