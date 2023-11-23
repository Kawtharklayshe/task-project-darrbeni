<script>
import {

  BButton,
  BFormGroup,

  BFormInput,

  BModal,
  BTable,


} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BFormGroup,
    BModal,
    BFormInput,
    BButton,
 


  },
  created(){

},
mounted(){
  console.log('The id is: ' + this.$route.params.id);
  
  this.id = this.$route.params.id;
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;
  console.log(tasks);
  let obj = tasks.find(el => el.id==this.id);
  console.log(obj)
  this.editedTask.name = obj.name;
  this.editedTask.description = obj.descripation;
  this.editedTask.startDate = obj.startDate;
  this.editedTask.isCompleted = obj.isCompleted;
 

},
  data() {
    return {
      editedTask: {
        id: null, // Task ID
        name: '',
        description: '',
        startDate: '',
        isCompleted: false,
        
      },
    }
  },
  methods: {
    saveTask() {
      
      // You can handle the task update logic here, for example, by emitting an event or making an API request.
      // Don't forget to pass the task ID (this.editedTask.id) to identify the task to be edited.
     
      // After updating, you can navigate back to the task list or another page.
    },
   
    
  },

  
  
  
}
</script>

<template>
  
  <div>
     
    <h2>Edit Task</h2>
    <form>
      <BFormGroup
        label="Task Name"
        label-for="editTaskName"
      >
        <BFormInput
          id="editTaskName"
          v-model="editedTask.name"
          required
        />
      </BFormGroup>

      <BFormGroup
        label="Description"
        label-for="editTaskDescription"
      >
        <BFormTextarea
          id="editTaskDescription"
          v-model="editedTask.description"
        />
      </BFormGroup>

      <BFormGroup
        label="Start Date"
        label-for="editTaskStartDate"
      >
        <BFormInput
          id="editTaskStartDate"
          v-model="editedTask.startDate"
          type="date"
        />
      </BFormGroup>

      <BFormGroup
        label="Is Completed"
        label-for="editTaskIsCompleted"
      >
        <BFormCheckbox
          id="editTaskIsCompleted"
          v-model="editedTask.isCompleted"
        />
      </BFormGroup>

      <BButton
        variant="primary"
        @click="saveTask"
      >
        Save
      </BButton>
    </form>
  </div>
</template>