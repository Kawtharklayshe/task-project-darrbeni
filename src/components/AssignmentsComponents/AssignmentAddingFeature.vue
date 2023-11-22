<template>
    <div>
      <b-button v-b-modal.assignment-modal @click="erase">Add assignment</b-button>
      <b-modal
        id="assignment-modal"
        ref="modal"
        title="Adding New Assignment"
        @show="resetModal"
        @hidden="resetModal"
        @ok="saveTask"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
          label="Responsible :"
          label-for="responsible-select"
          invalid-feedback="REsponsible is required"
          >
            <b-form-select id="responsible-select" v-model="form.responsible" :options="employeeItems" required></b-form-select>
          </b-form-group>

          <b-form-group
          label="Employees :"
          label-for="employees-select"
          invalid-feedback="Employees are required"
          >
            <b-form-select id="employees-select" v-model="form.selectedEmployees" :options="employeeItems" required></b-form-select>
          </b-form-group>

           <b-form-group
           label="Tasks :"
          label-for="tasks-select"
          invalid-feedback="Tasks are required"
           >
            <b-form-select id="tasks-select" v-model="form.selectedTasks" :options="taskItems" required></b-form-select>
          </b-form-group>
          </form>
</b-modal>
    </div>
  </template>
  <script>
  import {
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormSelect,
    BTable,

  } from "bootstrap-vue";
  
  export default {
    components: {
      BButton,
      BModal,
      BFormGroup,
      BFormInput,
      BFormTextarea,
      BFormSelect,
      BTable,
    },
    props:['taskItems','employeeItems'],
    data() {
      return {
        //single item stored temporiraly in the page till being sent
        form: {
         responsible:"",
         selectedEmployees:"",
         selectedTasks:""
        }
      };
    },
    methods: {
      // editTask: function (task) {
      //   console.log("afldf");
      //   this.$router.push({ name: "editTask", params: { id: task.id } });
      // },
      erase: function () {
        (this.responsible="")
      },
      saveTask: function () {
        this.$emit("addingAssignment", {
          responsible:this.form.responsible,employees:this.form.selectedEmployees,tasks:this.form.selectedTasks
        }
        );
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault();
        // Trigger submit handler
        this.handleSubmit();
      },
      handleSubmit() {
        this.$nextTick(() => {
          this.$bvModal.hide("assignment-modal");
        });
      },
    },
  };
  </script>
  