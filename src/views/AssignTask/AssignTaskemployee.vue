<script>
import { BButton, BFormGroup, BFormInput, BFormInvalidFeedback, BModal } from 'bootstrap-vue'

export default {
  components: {
    BModal,
    BButton,
    BFormInvalidFeedback,
    BFormGroup,
    BFormInput,

  },
  data() {
    return {
      showModal: false,
      employees: [],
      employee: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      employeeAssign: [],
      form: {
        employeeName: '',
        employeeTask: [],
        startDate: '',
        endDate: '',

      },
      EmployeeTask: [],
      EmloyeeList: [],
      TaskList: [],
      formStates: {
        fname: null,
        lname: null,
        email: null,
        password: null,
      },
    }
  },
  watch: {
    employees: {
      handler() {
        this.saveEmployeesToLocalStorage()
      },
      deep: true,
    },
  },
  mounted() {
    this.retrieveEmployeesFromLocalStorage()
    this.employeeAssign = JSON.parse(localStorage.getItem('tasks')) || []
  },
  methods: {
    savedemployee() {
      this.employeeAssign.push({
        employeeName: this.form.employeeName,
        employeeTask: this.form.employeeTask,
        startDate: this.form.startDate,
        endDate: this.form.endDate,
      })
      localStorage.setItem('tasks', JSON.stringify(this.employeeAssign))
    },
    getInputState(fieldName) {
      return this.formStates[fieldName]
    },
    checkFormValidity() {
      // Form validation logic
      // Set the formStates according to the validation result
      let isValid = true
      if (this.employee.firstName.trim() === '') {
        this.formStates.fname = false
        isValid = false
      }
      else {
        this.formStates.fname = true
      }
      if (this.employee.lastName.trim() === '') {
        this.formStates.lname = false
        isValid = false
      }
      else {
        this.formStates.lname = true
      }
      if (this.employee.email.trim() === '') {
        this.formStates.email = false
        isValid = false
      }
      else {
        this.formStates.email = true
      }
      if (this.employee.password.trim() === '') {
        this.formStates.password = false
        isValid = false
      }
      else {
        this.formStates.password = true
      }

      return isValid
    },
    handleSubmit() {
      console.log('hello')

      // Assign a new ID to the employee
      this.form.id = this.EmployeeTask.length + 1

      // Push the new employee to the employees array
      this.EmployeeTask.push({ ...this.form })
      localStorage.setItem('EmployeeTaskList', JSON.stringify(this.EmployeeTask))
this.$emit('getData')
      // Reset the form andclear the employee data
      this.resetModal()
    },
    resetModal() {
      this.showModal = false
      this.employee = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }
      this.resetFormStates()
    },
    resetFormStates() {
      this.formStates = {
        fname: null,
        lname: null,
        email: null,
        password: null,
      }
    },
    saveEmployeesToLocalStorage() {
      localStorage.setItem('employees', JSON.stringify(this.employees))
    },
    retrieveEmployeesFromLocalStorage() {
      const savedEmployees = localStorage.getItem('employees')
      if (savedEmployees)
        this.EmloyeeList = JSON.parse(savedEmployees)

      const savedTask = localStorage.getItem('tasks')
      if (savedTask)
        this.TaskList = JSON.parse(savedTask)
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="header d-flex justify-content-between align-items-center">
      <h1 class="logo fst-italic text-primary">
        Employees Task List
      </h1>
      <BButton
        variant="primary"
        @click="showModal = true"
      >
        Assign Task To Employee
      </BButton>
    </div>

    <BModal
      id="assign-task"
      ref="modal"
      v-model="showModal"
      title="Add a new task to employee"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleSubmit"
      @chick="savedemployee"
    >
      <form ref="employeeForm">
        <BFormGroup
          label="employee Name"
          label-for="employee-input"
          :state="getInputState('fname')"
        >
          <BFormSelect
            v-model="form.employeeName"
            :options="EmloyeeList"
            class="form-control"
            text-field="firstName"
            value-field="firstName"
          />
        </BFormGroup>

        <BFormGroup
          label="Task Name"
          label-for="task-input"
        >
          <BFormSelect
            v-model="form.employeeTask"
            :options="TaskList"
            class="form-control"
            text-field="name"
            value-field="name"
          />
        </BFormGroup>
        <BFormGroup
          label=" Start Date"
          label-for="date"
          invalid-feedback="date is required"
        >
          <BFormInput
            id="date"
            v-model="form.startdate"
            type="date"
          />
        </BFormGroup>

        <BFormGroup
          label="End Date"
          label-for="date"
          invalid-feedback="date is required"
        >
          <BFormInput
            id="date"
            v-model="form.startdate"
            type="date"
          />
        </BFormGroup>
      </form>
    </BModal>
    <!--
      <div>
      <b-table striped hover :items="employeeAssign"></b-table>
      </div>
    -->
  </div>
</template>

  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    margin-bottom: 20px;
  }

  .logo {
    margin: 0;
  }

  .employee-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 20px;
  }
  </style>
