Hani Salloum, [19/11/2023 10:05 AM]
<script>
import {
  BButton,
  BForm,
  BFormCheckbox,
  BFormDatepicker,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormSelectOption,
  BFormTextarea,
  BModal,
  BTable,
} from 'bootstrap-vue'

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
  data() {
    return {
      fname: '',
      fnameState: null,
      lname: '',
      lnameState: null,
      fullName: '',
      email: '',
      emailState: null,
      pass: '',
      passState: null,
      employees: [],
    }
  },
watch:{
fname:function(v){
    console.log(v)
    this.fullName =val + ' ' + this.lname
},
lname:function(v){
    this.fullName=this.firstName + '' + v
},




},
  mounted() {
    this.employees = JSON.parse(window.localStorage.getItem('Employees')) || []
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.employeeForm.checkValidity()

      this.fnameState = valid
      this.lnameState = valid
      this.emailState = valid
      this.passState = valid

      return valid
    },
    resetModal() {
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.pass = ''
      this.fnameState = null
      this.lnameState = null
      this.emailState = null
      this.passState = null
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
      this.employees.push({
        id: this.employees.length + 1,
        firstName: this.fname,
        lastName: this.lname,
        email: this.email,
        password: this.pass,
      })

      // add the array of tasks to local storage
      window.localStorage.setItem('Employees', JSON.stringify(this.employees))

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    editTask(task) {
      // this.$router.push(/edit/${task.id});
    },

  },
}
</script>

<template>
  <div class="container">
    <div class="header d-flex justify-content-between align-items-center">
      <h1 class="logo fst-italic text-primary">
        Employees List
      </h1>
      <BButton
        v-b-modal.modal-prevent-closing
        variant="primary"
      >
        Add Employee
      </BButton>
    </div>

    <BModal
      id="modal-prevent-closing"
      ref="modal"
      title="Add a new employee"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="employeeForm"
        @submit.stop.prevent="handleSubmit"
      >
        <BFormGroup
          class="formGroup"
          label="First Name"
          label-for="fname-input"
          invalid-feedback="First Name is required"
          :state="fnameState"
        >
          <BFormInput
            id="fname-input"
            v-model="fname"
            required
            :state="fnameState"
          />
        </BFormGroup>
        <BFormGroup
          class="formGroup"
          label="Last Name"
          label-for="lname-input"
          invalid-feedback="Last Name is required"
          :state="lnameState"
        >
          <BFormInput
            id="lname-input"
            v-model="lname"
            required
            :state="lnameState"
          />
        </BFormGroup>
        <BFormGroup
          class="formGroup"
          label="Email Address"
          label-for="email-input"
          invalid-feedback="Email Address is required"
          :state="emailState"
        >
          <BFormInput
            id="email-input"
            v-model="email"
            type="email"
            required
          />
        </BFormGroup>
        <BFormGroup
          class="formGroup"
          label="Password"
          label-for="pass-input"
          invalid-feedback="Password is required"
          :state="emailState"
        >
          <BFormInput
            id="pass-input"
            type="password"
            aria-describedby="password-help-block"
          />
          <BFormText id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </BFormText>
        </BFormGroup>
      </form>
    </BModal>
  </div>
</template>

<style>
.formGroup {
    margin-bottom: 40px;
}
</style>
