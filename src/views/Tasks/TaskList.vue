<script>

// import HelloWorld from '@/components/HelloWorld.vue';
// import {location} from '@/mixins/mixin'
import { mapGetters } from 'vuex';
import {
  BButton,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormTextarea,
  BModal,

}
  from 'bootstrap-vue'
  
export default {
  components: {
    BButton,
    BModal,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
  
    
},
  data() {
    return {
      arrayFromParent: ["maya", "sandy", "Ali"],
      // msg: "hello from parent",
      name: '',
      nameState: null,
      // taskList: [],
      stausOption: ['New', 'old'],
      form: {
        name: '',
        descripation: '',
        startDate: '',
        isComplete: '',
        status: '',
        startDate: ''

      },

    }
  },
  // mixins:[location],
  computed:{
    ...mapGetters(['getTasks'])
  },

  methods: {
    
saveTask(){
      this.$store.commit('saveTask',this.form);
      this.form.name = ''
      this.form.descripation = ''
      this.form.startDate = ''
      this.form.status = ''
      this.form.isComplete = ''
},
    // saveTask() {

    //   this.taskList.push({
    //     id: this.taskList.length + 1,
    //     name: this.form.name,
    //     descripation: this.form.descripation,
    //     status: this.form.status,
    //     isComplete: this.form.isComplete,

    //   })

      //add task list to local storage

      // localStorage.setItem('tasks', JSON.stringify(this.taskList));

  

   
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()

      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
    

      // Push the name to submitted names
      this.submittedNames.push(this.name)

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    editTask(task) {
      this.$router.push({ name: "editTask", params: { id: task.id } })
    }
  },

  mounted() {

    //get tasks from local storage
    // this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];

  }
}
</script>

<template>
  <div class="container">
   
    <!-- <HelloWorld style="color: blue;"> hi from Parent : i am in slot</HelloWorld>
    <HelloWorld> 
      <template v-slot:header>
    <h1>hi from Parent : i am in named slot </h1>
  </template>
    </HelloWorld> -->
    <div class="header d-flex justify-content-between ">
            <h1 class="logo ">Employees Tasks List</h1>
    <BButton class="btnAdd mb-5 p-2" v-b-modal.modal-prevent-closing>
      Add Task
    </BButton>
    </div>
    <div class="container">

      <div>
        <b-table striped hover :items="getTasks" @row-clicked="editTask"></b-table>
      </div>


    </div>
    <BModal id="modal-prevent-closing" ref="modal" title="Add New Task" 
      @ok="saveTask" >

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <BFormGroup label="Name" label-for="name-input" invalid-feedback="Name is required">
          <BFormInput id="name-input" v-model="form.name" required />
        </BFormGroup>
        <label for="textarea">Description:</label>
        <BFormTextarea id="textarea" v-model="form.descripation" placeholder="Enter something..." rows="3" max-rows="6" />
        <BFormGroup label="DueDate" label-for="Date">
          <BFormInput id="Date" v-model="form.startDate" type="date" required />
        </BFormGroup>
        <BFormGroup label="Select completed" label-for="completed">
          <BFormCheckbox id="completed" v-model="form.isComplete" name="checkbox-1" value="yes" unchecked-value="no">

            completed
          </BFormCheckbox>
        </BFormGroup>
        <BFormGroup label="Select Task Status" label-for="staus">
          <BFormSelect class="form-control" id="staus" v-model="form.status" :options="stausOption" />
        </BFormGroup>
      </form>
    </BModal>
  </div>
</template>
<style>
   body{
      background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
    }
   
.btnAdd{
  background-color: transparent;
}
</style>