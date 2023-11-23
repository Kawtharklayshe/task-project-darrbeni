<template>
    <div>
        <div>
            <b-table striped hover :items="employeeAssign" :fields="fields
            "></b-table>
          </div>
    </div>
</template>

<script>
import { BModal, BButton, BFormInvalidFeedback, BFormGroup, BFormInput } from "bootstrap-vue";

export default {
    components:{
        BModal,
      BButton,
      BFormInvalidFeedback,
      BFormGroup,
      BFormInput,
},
data(){
    return{
        ListEmployeeTask:[],
        form:{
            employeeName:'',
            employeeTask:[],
            startDate:'',
            endDate:'',
         
        },
    }
},
methods:{
            savedemployee(){
    this.employeeAssign.push({
        employeeName:this.form.employeeName,
        employeeTask:this.form.employeeTask,
        startDate:this.form.startDate,
        endDate:this.form.endDate,
    });
     localStorage.setItem('listtasks',JSON.stringify(this.employeeAssign)) ;
     },
},
mounted(){

}
}

</script>