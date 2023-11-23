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


export default {
  components: {
    BButton,
    BModal,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
    
   
  },
  data() {
    return {
        employees:[],
      editEmployee:{
        id:'',
        fName:'',
        lName:'',
        emaile:'',
        passWord:'',
      },
      
    }
  },


  methods: {

    saveTask() {
    
    //   this.employees.push({
    //     id:this.employees.length +1,
    //     firstName:this.employee.fName,
    //     lastName:this.employee.lName,
    //     emaile:this.employee.emaile,
    //     passWord:this.employee.passWord,

    //   })

       //add task list to local storage

    //   localStorage.setItem('employees',JSON.stringify(this.employees));

    //   this.employee.fName = ''
    //   this.employee.lName = ''
    //   this.employee.emaile = ''
    //   this.employee.passWord = ''
      
    },
  
    
  },
  mounted(){
    this.id = this.$route.params.id;
    //get tasks from local storage
    this.employees = JSON.parse(localStorage.getItem('employees')) || [];
   console.log(this.employees)
   let obj = this.employees.find(el => el.id==this.id);
   console.log(obj)
   this.editEmployee.fName = obj.firstName;
   this.editEmployee.lName = obj.lastName;
   this.editEmployee.emaile = obj.emaile;
   this.editEmployee.passWord = obj.passWord;
    
  }
}
</script>

<template>
<div>
    <BButton v-b-modal.modal-prevent-closing>
      Add Employee
    </BButton>
    <!-- <CardList :employees="employees"></CardList> -->

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
            v-model="editEmployee.fName"

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
            v-model="editEmployee.lName"

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
            v-model="editEmployee.emaile"
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
            v-model="editEmployee.passWord"
            type = "password"

            required
          />
        </BFormGroup>
        

      </form>
    </BModal>

    
</div>
 
</template>