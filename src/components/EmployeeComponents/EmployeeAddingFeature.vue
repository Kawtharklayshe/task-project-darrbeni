<template>
  <div>
    <b-button variant="secondary" v-b-modal.employee-modal @click="erase"><pre>Add        <br>   Employee</pre> </b-button>
    <b-modal
      id="employee-modal"
      ref="modal"
      title="Adding New Employee"
    
      @ok="saveEmployee"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name :"
          label-for="fname-input"
          invalid-feedback="First name is required"
        >
          <b-form-input
            id="fname-input"
            v-model="form.fname"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Last Name :"
          label-for="lname-input"
          invalid-feedback="Last name is required"
        >
        <b-form-input
            id="lname-input"
            v-model="form.lname"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Age :"
          label-for="age-input"
          invalid-feedback="Age is required"
        >
          <b-form-input
            id="age-input"
            v-model="form.age"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Experience :"
          label-for="ex-input"
          invalid-feedback="Experience is required"
        >
          <b-form-input id="ex-input" v-model="form.ex" required></b-form-input>
        </b-form-group>
        <b-form-group
          label="Email :"
          label-for="em-input"
          invalid-feedback="Email is required"
          required
        >
          <b-form-input
            id="em-input"
            v-model="form.email"
            required
          ></b-form-input>
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
  components: {
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormSelect,
    BTable,
  },
  props:['employee'],
  data() {
    return {
      //single item stored temporiraly in the page till being sent
      form: {
        email: "",
        fname: "",
        lname: "",
        startDate: "",
        endDate: "",
        ex: "",
        age:""
      },
    };
  },
  methods: {
    // editTask: function (task) {
    //   console.log("afldf");
    //   this.$router.push({ name: "editTask", params: { id: task.id } });
    // },
    erase: function () {
      (this.form.fname = ""),
        (this.form.lname = ""),
        (this.form.ex = ""),
        (this.startDate = ""),
        (this.endDate = ""),
        (this.email = "");
        (this.age = "");

    },
    saveEmployee: function () {
      this.$emit("addingEmployee",

       {
        fname:this.form.fname,
        lname:this.form.lname,
        age:this.form.age,
        ex:this.form.ex,
        startDate:this.form.startDate,
        endDate:this.form.endDate,
        email:this.form.email});
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide("employee-modal");
      });
    },
  },
};
</script>
