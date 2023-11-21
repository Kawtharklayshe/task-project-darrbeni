<script>
import {

  BButton,
  BFormGroup,

  BFormInput,

  BModal,
  BTable,

} from 'bootstrap-vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    BTable,
    HelloWorld,
    BFormGroup,
    BModal,
    BFormInput,
    BButton,

  },
  data() {
    return {
      msgWorld: 'hello from parent',
      message: 'hello',
      tasks: [], // Array to store tasks
      tableFields: [
        'name',
        'description',
        'startDate',
        'isCompleted',
      ],
      myname: 'ali',
      firstName:'',
      lastName:'',
      newTask: {
        id: 1,
        name: '',
        description: '',
        startDate: '',
        isCompleted: false,
      },
      show: false, // Initially, the modal is hidden
    }
  },
  computed: {
    // a computed getter
   
    fullName: {
    // getter
      get() {
        return `${this.firstName} ${this.lastName}`
      },

      // setter
      set(newValue) {
        const names = newValue.split(' ')

        this.firstName = names[0]
        this.lastName = `${names[names.length - 1]}mmemr`
      },
    },
  },
  mounted() {
    console.log('mounted')

    // console.log(localStorage.getItem("tasks"))

    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },
  created() {
    console.log('created')
  },

  methods: {
 
     reversedMessage() {
      // `this` points to the vm instance
      console.log(this.message.split('').reverse().join('')) 
    },
    showModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    },
    addTask() {
      if (this.newTask.name.trim() === '') {
        // Don't add an empty task
        return
      }

      this.tasks.push({ ...this.newTask })
      localStorage.setItem('tasks', JSON.stringify(this.tasks))

      // Close the modal after adding the task
      this.closeModal()

      // Clear the input fields
      this.newTask = {
        name: '',
        description: '',
        startDate: '',
        isCompleted: false,
      }
    },
    editTask(task) {
      // Navigate to the edit task page with the task ID as a parameter
      this.$router.push({ name: 'edit-task', params: { id: task.id } })
    },
  },
}
</script>

<template>
  <div>
   <p>Reversed message: "{{ reversedMessage() }}"</p>
    <BTable
      :items="tasks"
      :fields="tableFields"

      @row-clicked="editTask"
    />
    <BButton
      variant="primary"
      @click="showModal"
    >
      Add Task
    </BButton>

    <BModal
      v-model="show"
      title="Add New Task"
      @ok="addTask"
      @cancel="closeModal"
    >
      <form>
        
  <p>Reversed message: "{{ reversedMessage() }}"</p>
        <BFormGroup
          label="Message"
          label-for="taskName"
          description="Enter the name of the new task"
        >
          <BFormInput
            id="taskName"
            v-model="message"
            required
          />
        </BFormGroup>
         <BFormGroup
          label="Message"
          label-for="taskName"
          description="Enter the name of the new task"
        >
          <BFormInput
            id="taskName"
            v-model="msgWorld"
            required
          />
        </BFormGroup>

       
      </form>
    </BModal>
  </div>
</template>
