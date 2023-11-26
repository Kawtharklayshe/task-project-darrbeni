<template>
<b-row>
    <b-card v-for="(employee, index) in AllEmployee" :key="index" :title="employee.fullName"
    bg-variant="primary"  border-variant="info"  card-variant="outline-primary" class="mb-3 ms-3"
    :style="{width: '300px'}"
    >
      <P>Full Name:{{ employee.fullName}}</P>  
      <p>Email: {{ employee.email }}</p>
      <p >Password: {{ employee.password }}</p>
    </b-card>
    </b-row>
</template>  
<script>
   export default{
    name:'EmployeeList',
    props: {
    AllEmployee: Array
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
    }
   }
}
</script>  