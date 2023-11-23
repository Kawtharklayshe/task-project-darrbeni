<script>

import {
  BButton,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormTextarea,
  BModal,
  
 
}
  from 'bootstrap-vue'

import CardList from '@/views/Employees/CardList.vue'
export default {
  components: {
    BButton,
    BModal,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
    CardList,
   
  },
  data() {
    return {
      employees: [],
      employee:{
        fName:'',
        lName:'',
        emaile:'',
        passWord:'',
      },
      
    }
  },
  
  watch: {
    
    'employee.fName': function (v) {
      // `this` points to the vm instance
      // console.log(v)
      this.fullName = v + " " + this.employee.lName;
    },
    'employee.lName': function (v) {
      // `this` points to the vm instance
      // console.log(v)
      this.fullName =this.employee.lName +  " " +  v;
    }
  },

  methods: {

    saveTask() {
    
      this.employees.push({
        id:this.employees.length +1,
        firstName:this.employee.fName,
        lastName:this.employee.lName,
        emaile:this.employee.emaile,
        passWord:this.employee.passWord,

      })

       //add task list to local storage

      localStorage.setItem('employees',JSON.stringify(this.employees));

      this.employee.fName = ''
      this.employee.lName = ''
      this.employee.emaile = ''
      this.employee.passWord = ''
      
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
        this.employee.fName = valid;
        this.employee.lName = valid;
        this.employee.emaile = valid;
        this.employee.passWord = valid;
        return valid
     
    },
  
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      

      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity())
        return

      // Push the name to submitted names
      this.submittedNames.push(this.name)

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
  },
  mounted(){
    
    //get tasks from local storage
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
   
    
  }
}
</script>

<template>
<div>
    <BButton v-b-modal.modal-prevent-closing class="btnAdd">
      Add Employee
    </BButton>
    <CardList :employees="employees"></CardList>

    <BModal
      id="modal-prevent-closing"
      ref="modal"
      title="Add New Employee"
      @ok="saveTask"
     
    >
  
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
      
        <BFormGroup
          label="First Name"
          label-for="fname-input"
          invalid-feedback="First Name is required"
        >
          <BFormInput
            id="fname-input"
            v-model="employee.fName"

            required
          />
        </BFormGroup>
        <BFormGroup
          label="Last Name"
          label-for="lname-input"
          invalid-feedback="Last Name is required"
        >
          <BFormInput
            id="lname-input"
            v-model="employee.lName"

            required
          />
        </BFormGroup>
        <BFormGroup
          label="Your Email"
          label-for="email-input"
          invalid-feedback="email is required"
        >
          <BFormInput
            id="email-input"
            v-model="employee.emaile"
            type = "email"

            required
          />
        </BFormGroup>
        <BFormGroup
          label="Your Password"
          label-for="pass-input"
          invalid-feedback="Password is required"
        >
          <BFormInput
            id="pass-input"
            v-model="employee.passWord"
            type = "password"

            required
          />
        </BFormGroup>
        

      </form>
    </BModal>

    
</div>
 
</template>
<style>
.btnAdd{
  background-color: transparent;
}
</style>