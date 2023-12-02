<template>
    <div>
      <b-button variant="info" v-b-modal.assignment-modal-2 @click="erase"><pre>Update        <br>   Assignment</pre> </b-button>
      <b-modal
        id="assignment-modal-2"
        ref="modal"
        title="Updating Assignment" 
        @ok="saveAssignment"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
      label="Id :"
      label-for="id-input"
      invalid-feedback="Id is required"
    >
      <b-form-input
        id="id-input"
        v-model="form.id"
        required
      ></b-form-input>
    </b-form-group>
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
         id:"",
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
        (this.form.id="")
        (this.form.responsible="")
        (this.form.employees="")
        (this.form.tasks="")

      },
      saveAssignment: function () {
        this.$emit("updatingAssignment", {
    
          id:this.form.id,
          responsible:this.form.responsible,
          employees:this.form.employees,
          tasks:this.form.tasks
        }
        );
        console.log(this.form);
        console.log("//////");
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
  