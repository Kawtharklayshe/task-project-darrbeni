<script>
import { BButton, BFormGroup, BFormInput, BFormInvalidFeedback, BModal } from 'bootstrap-vue'
import AssignTaskEmployee from './AssignTaskEmployee.vue'

export default {
  components: {
    BModal,
    BButton,
    BFormInvalidFeedback,
    BFormGroup,
    BFormInput,
    AssignTaskEmployee,
  },
  data() {
    return {
      ListEmployeeTask: [],
      form: {
        employeeName: '',
        employeeTask: [],
        startDate: '',
        endDate: '',

      },
      employeeAssign: [],
    }
  },
  mounted() {
    // localStorage.getItem("")
    // this.employeeAssign = JSON.parse(localStorage.getItem('EmployeeTaskList'))
    this.getDataInParent()
  },
  methods: {
  
    getDataInParent(){
            this.employeeAssign = JSON.parse(localStorage.getItem('EmployeeTaskList'))

    },
  },
}
</script>

<template>
  <div>
    <div>
      <AssignTaskEmployee @getData="getDataInParent" />
      <BTable
        striped
        hover
        :items="employeeAssign"
        :fields="fields
        "
      />
    </div>
  </div>
</template>
