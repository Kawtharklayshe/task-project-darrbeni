<script>
import {
    BModal,
    BDropdown,
    BFormGroup,
  BFormInput,
  
 
}
  from 'bootstrap-vue'

export default {
  components: {
    BModal,
    BDropdown,
    BFormGroup,
  BFormInput,
    
   
  },
  data() {
    return {
    employees:[],
     tasks:[],
     
     form:{
    employeeName:'',
     startDate:'',
     endDate:'',
     tasksForEmployee:[],
    },
     empTasks:[]
      }
      
    
  },


  methods: {
    handleSubmit() {
       
       
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      // handleOk(bvModalEvent) {
      //   // Prevent modal from closing
      //   bvModalEvent.preventDefault()
      //   // Trigger submit handler
      //   this.handleSubmit()
      // },
      saveArray() {
    console.log(this.empTasks)
    this.empTasks.push({
     employeeName:this.form.employeeName,
     tasks:this.form.tasksForEmployee,
     startDate:this.form.startDate,
     endDate:this.form.endDate,

    })
    console.log(this.empTasks)
     //add employee Tasks to local storage

    localStorage.setItem('empTasks',JSON.stringify(this.empTasks));
    this.form.employeeName='',
this.form.tasksForEmployee=[],
    this.form.startDate = ''
    this.form.endDate=''

    //go to parent
    this.$emit('updateData')
   
  
    
 
  },
    
  },
  mounted(){
    
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
   
   this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
   
    this.empTasks = JSON.parse(localStorage.getItem('emptasks')) || [];
  }
}
</script>
<template>
    <div>
        
    <b-button v-b-modal.modal-prevent-closing>Assign Task</b-button>

    

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Assign Tasks To Employee"
      @ok="saveArray"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="employee Name" label-for="employee-input" >
            <b-form-select v-model="form.employeeName" :options="employees" class="form-control" 
          text-field="firstName" value-field="firstName"></b-form-select>
 </b-form-group>
 
     <b-form-group label="Task Name" label-for="task-input" >
            <b-form-select v-model="form.tasksForEmployee" :options="tasks" class="form-control" text-field="name" value-field="name" ></b-form-select>
 </b-form-group>

<BFormGroup
          label="StartDate"
          label-for="Date"
        >
          <BFormInput
            id="Date"
            v-model="form.startDate"
            type="date"

            required
          />
        </BFormGroup>
        <BFormGroup
          label="EndDate"
          label-for="Date"
        >
          <BFormInput
            id="Date"
            v-model="form.endDate"
            type="date"

            required
          />
        </BFormGroup>
      </form>
    </b-modal>
  </div>
    
</template>