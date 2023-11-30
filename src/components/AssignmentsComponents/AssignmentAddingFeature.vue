<template>
    <div>
      <b-button variant="info" v-b-modal.assignment-modal @click="erase">Add Assignment</b-button>
      <b-modal
        id="assignment-modal"
        ref="modal"
        title="Adding New Assignment"
      
        @ok="saveTask"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
          label="Responsible :"
          label-for="responsible-select"
          invalid-feedback="REsponsible is required"
          >
            <b-form-select id="responsible-select" v-model="form.responsible" :options="dropEmployees" required></b-form-select>
          </b-form-group>

          <b-form-group
          label="Employees :"
          label-for="employees-select"
          invalid-feedback="Employees are required"
          >
            <b-form-select id="employees-select" v-model="form.employees" :options="dropEmployees" required></b-form-select>
          </b-form-group>

           <b-form-group
           label="Tasks :"
          label-for="tasks-select"
          invalid-feedback="Tasks are required"
           >
            <b-form-select id="tasks-select" v-model="form.tasks" :options="dropTasks" required></b-form-select>
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
        form: {
         responsible:"",
         employees:"",
         tasks:""
        }
      };
    },
    computed:{
      dropEmployees(){
         if(this.employeeItems==[])return [""];
         else 
        return this.employeeItems.map(el =>el.fname)
      },
      dropTasks(){
         if(this.taskItems==[])return [""];
         else
         return this.taskItems.map(el =>el.name)
      }
    },
    methods: {
      erase: function () {
        (this.responsible="")
      },
      saveTask: function () {
        this.$emit("addingAssignment", {
          responsible:this.form.responsible,
          employees:this.form.employees,
          tasks:this.form.tasks
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
  