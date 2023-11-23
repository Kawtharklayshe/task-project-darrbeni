
<template>
    <div class="container">
       
        <div class="header d-flex justify-content-between align-items-center">
            <h1 class="logo fst-italic text-primary">Employees List</h1>
            <b-button v-b-modal.assign-task variant="primary">Assign task to employee</b-button>
        </div>

        <b-modal id="assign-task" ref="modal" title="Add a new employee" @show="resetModal" @hidden="resetModal"
            @ok="handleOk"  >
            <form ref="employeeForm" @submit.stop.prevent="handleSubmit">

                <b-form-group class="formGroup" label="Employee Name" label-for="fname-input">
                    <b-form-select v-model="employeeName" class="form-control">
                    <b-form-select-option v-for="emp in employees" :value="emp.firstName+' ' + emp.lastName">{{emp.firstName+' ' + emp.lastName}}</b-form-select-option>
                    </b-form-select>
                </b-form-group>

                <b-form-group class="formGroup" label="Task Name" label-for="fname-input">
                    <b-form-select multiple v-model="taskName" class="form-control">
                        <b-form-select-option v-for="task in tasks" :value="task.name">{{task.name}}</b-form-select-option>

                    </b-form-select>
                </b-form-group>

            
                <b-form-group label="Start Date" label-for="startDate" invalid-feedback="date is required">
                    <b-form-input type='date' v-model="startDate" id="date"></b-form-input>
                </b-form-group>
                <b-form-group label="End Date" label-for="endDate" invalid-feedback="date is required">

                    <b-form-input type='date' v-model="endDate" id="date"></b-form-input>
                </b-form-group>

            </form>

        </b-modal>
        <!-- <div>
            <b-table striped hover :items="employeeTask" :fields="['fullName', 'taskName']"></b-table>
          </div> -->
    </div>
</template>

<style>
.formGroup {
    margin-bottom: 40px;
}
</style>
  
<script>
import {
    BModal,
    BForm,
    BFormGroup,
    BFormCheckbox,
    BFormInput,
    BButton,
    BFormTextarea,
    BFormDatepicker,
    BFormSelect,
    BFormSelectOption,
    BTable
} from "bootstrap-vue"




export default {
    components: {
        BModal,
        BForm,
        BFormGroup,
        BFormCheckbox,
        BFormInput,
        BButton,
        BFormTextarea,
        BFormDatepicker,
        BFormSelect,
        BFormSelectOption,
        BTable,
     


    },
    props: {
        arry: Object,
    },
    data() {
        return {
            employeeName: '',
            taskName: [],
            employeeTask: [],
            startDate: '',
            endDate: '',
            employees: [],
            tasks:[],
            


        }
    },
  
   
    methods: {
        checkFormValidity() {
            const valid = this.$refs.employeeForm.checkValidity()
            return valid;
        },
        resetModal() {
            this.employeeName="";
            this.taskName=[];
            this.startDate="";
            this.endDate="";
        },
        handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }
            // Push the name to submitted names
            this.employeeTask.push({
                id: this.employeeTask.length + 1,
                fullName: this.employeeName,
                taskName:this.taskName,
                startDate:this.startDate,
                endDate:this.endDate,

            });

            // add the array of tasks to local storage
            window.localStorage.setItem("employeeTask", JSON.stringify(this.employeeTask))

            this.$emit("get-data-in-parent") 

            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide('assign-task')
            })
            
        },
    },
    
  mounted(){
      console.log("dd")
      console.log(JSON.parse(localStorage.getItem('tasks')))
      this.tasks=JSON.parse(localStorage.getItem('tasks')) || [];
      this.employees=JSON.parse(localStorage.getItem('employees')) || [];
      this.employeeTask=JSON.parse(localStorage.getItem('employeeTask')) || [];
  }
}


</script>