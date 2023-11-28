<template>
  <div>
    <!-- Adding the adding items component to the page  -->
    <!-- إضافة المكون * إضافة العناصر * إلى الصفحة  -->
    <assignment-adding-feature
      :taskItems="taskItems"
      :employeeItems="employeeItems"
      @addingAssignment="
        {
          assignmentItems.push({ id: assignmentItems.length + 1, ...$event }),
            reloadPage();
        }
      "
    >
    </assignment-adding-feature>
    <br />

    <!-- Adding the updating items component to the page  -->
    <!-- إضافة المكون * تعديل العناصر * إلى الصفحة  -->
    <assignment-updating-feature
      :taskItems="taskItems"
      :employeeItems="employeeItems"
      v-if="assignmentsExisted"
      @updatingAssignment="updateAssignment"
    >
    </assignment-updating-feature>

    <!-- Adding the items list component to the page  -->
    <!-- إضافة المكون * جدول العناصر * إلى الصفحة  -->
    <data-table :itemsList="assignmentItems"> </data-table>
  </div>
</template>
<script lang="js">
import AssignmentAddingFeature from '@/components/AssignmentsComponents/AssignmentAddingFeature.vue';
import AssignmentUpdatingFeature from '@/components/AssignmentsComponents/AssignmentUpdatingFeature.vue';
import mixin from '@/mixins/mixin'

export default {
    components:{
        AssignmentAddingFeature,AssignmentUpdatingFeature,
    },
    mixins: [ mixin ],
    data(){return {
       assignmentItems:JSON.parse(localStorage.getItem('assignmentItems'))||[],
       taskItems:JSON.parse(localStorage.getItem('taskItems'))||[],
       employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[]
    }},
    created() {
    // Let's use the function provided by the mixin.
    console.log(`${this.currentUser.name} has currently logged into the assignment page.`);
   },
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
        updateAssignment($event){
          console.log({...$event})
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
    }
    }
}
</script>
