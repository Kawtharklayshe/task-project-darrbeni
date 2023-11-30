<template>
  <div>
      <!-- Adding the adding items component to the page  -->
      <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
    <employee-adding-feature
      @addingEmployee="addEmployee"
      >
    </employee-adding-feature>
    <br/>
    <!-- Adding the updating items component to the page  -->
    <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
    <employee-updating-feature v-if="employeesExisted" @updatingEmployee="updateEmployee">
    </employee-updating-feature>
    <br/>
     <!-- Adding the deleting items component to the page  -->
    <!-- إضافة المكون *حذف العناصر * إلى الصفحة  -->
    <employee-deleting-feature v-if="employeesExisted" @deletingEmployee="deleteEmployee">
    </employee-deleting-feature>

     <!-- Adding the Items list component to the page  -->
      <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
    <data-table :itemsList="employeeItems"></data-table>
  </div>
</template>
<script lang="js">
//Components
import EmployeeAddingFeature from '@/components/EmployeeComponents/EmployeeAddingFeature.vue';
import EmployeeUpdatingFeature from '@/components/EmployeeComponents/EmployeeUpdatingFeature.vue';
import EmployeeDeletingFeature from '@/components/EmployeeComponents/EmployeeDeletingFeature.vue';
//Mixins
import Mixin from '@/mixins/mixin'
export default {
    mixins:[Mixin],
    components:{
        EmployeeAddingFeature,EmployeeUpdatingFeature,EmployeeDeletingFeature
    },
    data(){return {
        employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[],
    }},
    created() {
    // Let's use the function provided by the mixin.
    console.log(`${this.currentUser.name} has currently logged into the employee page.`);
   },
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
      reloadPage()
      {
        window.location.reload()
      },
      addEmployee($event)
      {
        this.employeeItems.push({ id: this.employeeItems.length + 1, ...$event });
        if(this.employeeItems.length==1)
            this.reloadPage();
      //updating history
        this.historyItems.push({id:this.historyItems.length+1,
          details:`You added a new ${{...$event}.fname+" "+{...$event}.lname} to the employees`})
      },
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
            //updating history
          this.historyItems.push({id:this.historyItems.length+1,
          details:`You have updated ${{...$event}.fname+" "+{...$event}.lname} employee`}) 
          localStorage.setItem('employeeItems',JSON.stringify(this.employeeItems))
          }
          else
          {
            alert("you entered a bad id")
          }
      }
      ,
      deleteEmployee($event)
      {
        if((({...$event}.id)<this.employeeItems.length)&&(({...$event}.id)>=0 ))
          {
             //updating history
          this.historyItems.push({id:this.historyItems.length+1,
          details:`You have deleted ${this.employeeItems[{...$event}.id].fname+" "+this.employeeItems[{...$event}.id].lname} employee`}) 
            this.employeeItems=this.employeeItems.slice(0,{...$event}.id).concat(this.employeeItems.slice({...$event}.id+1,this.employeeItems.length));
            this.employeeItems.filter((el) => el.id>{...$event}.id).map((el) => el.id--);
            localStorage.setItem('employeeItems',JSON.stringify(this.employeeItems));
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
