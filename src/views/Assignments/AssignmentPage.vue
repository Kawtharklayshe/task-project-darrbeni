<template>
  <div>
    <b-container class="sticky-top-1">
      <b-row class="row1">
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
//Mixins
import Mixin from '@/mixins/mixin'
export default {
  mixins:[Mixin],
    components:{
        AssignmentAddingFeature,AssignmentUpdatingFeature,AssignmentDeletingFeature
    },
    data(){return {
       assignmentItems:JSON.parse(localStorage.getItem('assignmentItems'))||[],
       taskItems:JSON.parse(localStorage.getItem('taskItems'))||[],
       employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[]
    }},
    watch:{
      assignmentItems(){
            localStorage.setItem('assignmentItems',JSON.stringify(this.assignmentItems))
         }
    },
    computed:{
      assignmentsExisted()
    {
      if((JSON.parse(localStorage.getItem('assignmentItems'))||[]).length==0) return false;
    else return true;
  },
},
    methods:{
      reloadPage()
    {
      window.location.reload()
    },
    addAssignment($event)
      {
        this.assignmentItems.push({ id: this.assignmentItems.length + 1, ...$event });
        if(this.assignmentItems.length==1)
            this.reloadPage();
          //updating history
        this.historyItems.push({id:this.historyItems.length+1,
          details:`You added a new Assignment with  ${{...$event}.responsible} as a resposible`})
      },
      updateAssignment($event){
           //updating history
           this.historyItems.push
           ( {id:this.historyItems.length+1,
            details:`You have updated an Assignment whose responsible was ${{...$event}.responsible}`}) ;
          if((({...$event}.id-1)<this.assignmentItems.length)&&(({...$event}.id-1)>=0 ))
        {
          if ({...$event}.responsible!="")
            this.assignmentItems[{...$event}.id-1].responsible={...$event}.responsible;
          if ({...$event}.tasks!="")
            this.assignmentItems[{...$event}.id-1].tasks={...$event}.tasks;
          if ({...$event}.employees!="")
            this.assignmentItems[{...$event}.id-1].employees={...$event}.employees;
          localStorage.setItem('assignmentItems',JSON.stringify(this.assignmentItems));
        }
        else
        {
          alert("you entered a bad id")
        }
    },
    deleteAssignment($event)
    {
        if((({...$event}.id)<this.assignmentItems.length)&&(({...$event}.id)>=0 ))
          {
            //updating history
            this.historyItems.push({id:this.historyItems.length+1,
            details:`You have deleted an Assignment whose responsible is ${this.assignmentItems[{...$event}.id].responsible}`}) 
            this.assignmentItems=this.assignmentItems.slice(0,{...$event}.id).
            concat(this.assignmentItems.slice({...$event}.id+1,this.assignmentItems.length));
            this.assignmentItems.filter((el) => el.id>{...$event}.id).map((el) => el.id--);
            localStorage.setItem('assignmentItems',JSON.stringify(this.assignmentItems));
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