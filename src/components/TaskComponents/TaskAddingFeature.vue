<template>
  <div>

    <b-button variant="info" v-b-modal.task-modal @click="erase">Add Task</b-button>
    <b-modal
      id="task-modal"
      ref="modal"
      title="Adding New Task"
      @ok="saveTask"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
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

        <b-form-select
          v-model="form.difficulty"
          :options="options"
        ></b-form-select>

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
        name: "",
        description: "",
        duration: "",
        startDate: "",
        endDate: "",
        difficulty: "",
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
    // editTask: function (task) {
    //   console.log("afldf");
    //   this.$router.push({ name: "editTask", params: { id: task.id } });
    // },
    erase: function () {
      (this.name = ""),
        (this.description = ""),
        (this.form.duration = ""),
        (this.form.startDate = ""),
        (this.form.endDate = "")((this.form.difficulty = ""));
    },
    saveTask: function () {
      this.$emit("addingTask", {
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
        this.$bvModal.hide("task-modal");
      });
    },
  },
};
</script>
  