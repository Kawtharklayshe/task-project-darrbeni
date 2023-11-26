
<template>
<div class="bg-light">
<b-button v-b-modal.modal-prevent-closing class="mb-3 mt-5">Add Employee</b-button>

<b-modal id="modal-prevent-closing" @ok="handleOk" @hidden="resetModal">
  <b-form @submit.stop.prevent="handleSubmit" ref="employeeForm">
    <b-form-group :state="fnameState" label="First Name:" label-for="fname-input" :invalid-feedback="fnameState ? '' : 'First name is required'">
      <b-form-input id="fname-input" v-model="fname" required></b-form-input>
    </b-form-group>

    <b-form-group :state="lnameState" label="Last Name:" label-for="lname-input" :invalid-feedback="lnameState ? '' : 'Last name is required'">
      <b-form-input id="lname-input" v-model="lname" required></b-form-input>
    </b-form-group>

    <b-form-group :state="emailState" label="Email:" label-for="email-input" :invalid-feedback="emailState ? '' : 'Email is required'">
      <b-form-input id="email-input" v-model="email" type="email" required></b-form-input>
    </b-form-group>

    <b-form-group :state="passState" label="Password:" label-for="pass-input" :invalid-feedback="passState ? '' : 'Password is required'">
      <b-form-input id="pass-input" v-model="pass" type="password" required></b-form-input>
    </b-form-group>

    <b-button type="submit">Submit</b-button>
  </b-form>
</b-modal>
<!-- {{ employees }} -->
<EmployeeList :AllEmployee="employees" />
</div>
</template>
<style>
.formGroup {
margin-bottom: 40px;
}
</style>

<script>
import EmployeeList from "./EmployeeList.vue"
import {
BCard,
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
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name:'AddEmployee',
components: {
    EmployeeList,
    BCard,
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
    HelloWorld
},
data() {
    return {
        fname: '',
        fnameState: null,
        lname: '',
        lnameState: null,
        fullName:'',
        fullNameState:null,
        email: '',
        emailState: null,
        pass: '',
        passState: null,
        employees: []
    }
},
mounted() {
    this.employees = JSON.parse(window.localStorage.getItem("Employees")) || [];
    // console.log(this.employees);
},
methods: {
    checkFormValidity() {
        const valid = this.$refs.employeeForm.checkValidity()
        this.fnameState = valid;
        this.lnameState = valid;
        this.emailState = valid;
        this.passState = valid;
        this.fullNameState= valid;
        return valid;
    },
    resetModal() {
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.pass = '';
        this.fullName='';
        this.fnameState= null;
        this.lnameState= null;
        this.emailState= null;
        this.passState= null;
        this.fullName=null;
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
        this.employees.push({
            id: this.employees.length + 1,
            firstName: this.fname,
            lastName: this.lname,
            email: this.email,
            password: this.pass,
            fullName:this.fname+' '+this.lname
        });
       // add the array of tasks to local storage
        window.localStorage.setItem("Employees", JSON.stringify(this.employees));
        // Hide the modal manually
        this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
        })
    },
    editTask(task) {
        // this.$router.push(/edit/${task.id});
    }

},
watch:{
    fname: function(val){
    console.log(val)
    this.fullName= val +' '+ this.lname
  },
  lname: function(val){
    this.fullName= this.fname +' '+val
  }

},

}
</script>