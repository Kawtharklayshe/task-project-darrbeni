<template>
  <b-modal
    id="assign-task"
    title="Add a new task to employee"
    @ok="handleSubmit"
    @shown="resetModal"
    @hidden="resetModal"
    v-model="value"
  >
    <form ref="employeeForm">
      <b-form-group label="Employee Name" label-for="employee-input">
        <b-form-select
          v-model="form.employeeName"
          :options="employeeList"
          class="form-control"
          text-field="firstName"
          value-field="firstName"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Task Name" label-for="task-input">
        <b-form-select
          v-model="form.employeeTask"
          :options="taskList"
          class="form-control"
          text-field="name"
          value-field="name"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Start Date" label-for="start-date" invalid-feedback="Date is required">
        <b-form-input type="date" v-model="form.startDate" id="start-date"></b-form-input>
      </b-form-group>

      <b-form-group label="End Date" label-for="end-date" invalid-feedback="Date is required">
        <b-form-input type="date" v-model="form.endDate" id="end-date"></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      form: {
        employeeName: '',
        employeeTask: [],
        startDate: '',
        endDate: '',
      },
      employeeList: [],
      taskList: [],
    };
  },
  mounted() {
    this.retrieveFromLocalStorage();
  },
  methods: {
    handleSubmit() {
      const task = {
        employeeName: this.form.employeeName,
        employeeTask: this.form.employeeTask,
        startDate: this.form.startDate,
        endDate: this.form.endDate,
      };

      this.saveToLocalStorage(task);
      this.$emit('employee-task-assigned', task);
      this.$emit('input', false);
    },
    resetModal() {
      this.form = {
        employeeName: '',
        employeeTask: [],
        startDate: '',
        endDate: '',
      };
    },
    saveToLocalStorage(task) {
      const savedTasks = JSON.parse(localStorage.getItem('employeeTaskList')) || [];
      savedTasks.push(task);
      localStorage.setItem('employeeTaskList', JSON.stringify(savedTasks));
    },
    retrieveFromLocalStorage() {
      const savedTasks = JSON.parse(localStorage.getItem('employeeTaskList')) || [];
      this.employeeList = JSON.parse(localStorage.getItem('employees')) || [];
      this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
      this.$emit('employee-task-assigned', ...savedTasks);
    },
  },
};
</script>
