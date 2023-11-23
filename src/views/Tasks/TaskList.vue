<script>

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
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  components: {
    BButton,
    BModal,
    BFormSelect,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
    HelloWorld,
  },
  data() {
    return {
      arrayFromParent :["maya","sandy","Ali"],
      msg:"hello from parent",
      name: '',
      nameState: null,
      taskList: [],
      stausOption: ['New', 'old'],
      form: {
        name: '',
        descripation: '',
        startDate: '',
        isComplete: '',
        status: '',
        startDate:''
      
      },
       current : 0,
    }
  },
  methods: {
    erase: function(){this.form.name='';},

    saveTask() {
    
      this.taskList.push({
        id:this.taskList.length+1,
        name:this.form.name,
        descripation:this.form.descripation,
        status:this.form.status,
        isComplete:this.form.isComplete,

      })

       //add task list to local storage

      localStorage.setItem('tasks',JSON.stringify(this.taskList));

      this.form.name = ''
      this.form.descripation = ''
      this.form.startDate = ''
      this.form.status = ''
      this. isComplete = ''
    
      
   
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()

      this.nameState = valid

      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()

      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity())
        return

      // Push the name to submitted names
      this.submittedNames.push(this.name)

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    editTask(task){
      this.$router.push({name : "editTask", params:{id: task.id}})
    }
  },
  created(){
    
    console.log('created');

  },
  mounted(){
    console.log('mounted');
    //get tasks from local storage
    this.taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    
  }
}
</script>

<template>
  <!-- <HelloWorld :arrayFromParent = "arrayFromParent"></HelloWorld> -->

  <div>
    
  <HelloWorld :msg="msg" :arr="arrayFromParent"></HelloWorld>

    <BButton v-b-modal.modal-prevent-closing>
      Add Task
    </BButton>
<div class="container">

 <!-- <table>
<tr>
<th>Task Name</th>
<th>Task descripation</th>
<th>Task startDate</th>
<th>Task status</th>
</tr> 

<tr v-for="task in taskList">
  <td>{{task.name}}</td>
  <td>{{task.descripation}}</td>

  <td>{{task.status}}</td>
</tr>

</table> -->
  <div>
    <b-table striped hover :items="taskList" 
    @row-clicked = "editTask"
    ></b-table>
  </div>


</div>
    <BModal
      id="modal-prevent-closing"
      ref="modal"
      title="Add New Task"
      @show="resetModal"
      @hidden="resetModal"
      @ok="saveTask"
      @click="erase"
    >
  
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <BFormGroup
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <BFormInput
            id="name-input"
            v-model="form.name"

            required
          />
        </BFormGroup>
        <label for="textarea">Description:</label>
        <BFormTextarea
          id="textarea"
          v-model="form.descripation"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        />
        <BFormGroup
          label="DueDate"
          label-for="Date"
        >
          <BFormInput
            id="Date"
            v-model="form.startDate"
            type="date"

            required
          />
        </BFormGroup>
         <BFormGroup
          label="Select completed"
          label-for="completed"
        >
        <BFormCheckbox
          id="completed"
          v-model="form.isComplete"
          name="checkbox-1"
          value="yes"
          unchecked-value="no"
        >
          
          completed
        </BFormCheckbox>
         </BFormGroup>
 <BFormGroup
          label="Select Task Status"
          label-for="staus"
        >
        <BFormSelect
        class="form-control"
        id="staus"
          v-model="form.status"
          :options="stausOption"
        />
 </BFormGroup>
      </form>
    </BModal>
  </div>
</template>