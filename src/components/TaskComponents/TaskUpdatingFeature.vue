<template>
    <div>
      <b-button v-b-modal.task-modal-2 @click="erase" variant="info">
        <pre>Update      <br>   Task</pre>
      </b-button>
      <b-modal
        id="task-modal-2"
        ref="modal"
        title="Updating Task"
        @show="erase"
        @hidden="erase"
        @ok="saveTask"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="Id :"
            label-for="id-input"
            invalid-feedback="Id Name is required"
          >
            <b-form-input
              id="id-input"
              v-model="form.id"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Task :"
            label-for="task-input"
            invalid-feedback="Task Name is required"
          >
            <b-form-input
              id="task-input"
              v-model="form.name"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            label="Description :"
            label-for="desc-input"
            invalid-feedback="Description is required"
          >
            <b-form-input
              id="duration-input"
              v-model="form.description"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            label="Duration :"
            label-for="dura-input"
            invalid-feedback="Duration is required"
          >
            <b-form-input
              id="dura-input"
              v-model="form.duration"
              required
            ></b-form-input>
          </b-form-group>
           
          <b-form-group
          label="Task Difficulty:"
          label-for="task-difficulty"
          invalid-feedback="Task Difficulty is required"
        >
        <b-form-select
        id="task-difficulty"
        v-model="form.difficulty"
        :options="options"
      ></b-form-select>
        </b-form-group>
          
          <label for="example-datepicker">Start Date :</label>
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.startDate"
            class="mb-2"
          ></b-form-datepicker>
  
          <label for="example-datepicker">End Date :</label>
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.endDate"
            class="mb-2"
          ></b-form-datepicker>
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
    props:['taskItems'],
    components: {
      BButton,
      BModal,
      BFormGroup,
      BFormInput,
      BFormTextarea,
      BFormSelect,
      BTable,
    },
    data() {
      return {
        //single item stored temporiraly in the page till being sent
        form: {
          id:null,
          name: "",
          description:"",
          duration:"",
          startDate:"",
          endDate:"",
          difficulty:""
        },
        options: [
          { value: 1, text: "Very hard" },
          { value: 2, text: "Hard" },
          { value: 3, text: "Medium" },
          { value: 4, text: "Easy" },
          { value: 5, text: "Very easy" },
        ],
      };
    },
    methods: {
      erase: function () {
          (this.form.id=""),
          (this.form.name =""),
          (this.form.description = ""),
          (this.form.duration = ""),
          (this.form.startDate = ""),
          (this.form.endDate = ""),
          (this.form.difficulty = "");
      },
      saveTask: function () {
        this.$emit("updatingTask", {
          id:this.form.id,
          name: this.form.name,
          description: this.form.description,
          duration: this.form.duration,
          difficulty: this.form.difficulty,
          startDate: this.form.startDate,
          endDate: this.form.endDate,
        });
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault();
        // Trigger submit handler
        this.handleSubmit();
      },
      handleSubmit() {
        this.$nextTick(() => {
          this.$bvModal.hide("task-modal-2");
        });
      },
    },
  };
  </script>
    