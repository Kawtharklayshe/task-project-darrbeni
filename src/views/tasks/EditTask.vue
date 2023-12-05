<template>
    <div class="container">
        <div class="header d-flex justify-content-between align-items-center mb-5">
            <h1 class="logo fst-italic text-primary">Edit Task</h1>
            <button @click="saveTask" class="btn btn-primary">Save</button>
        </div>
        <form>
            <BFormGroup label="Task Name" label-for="editTaskName">
                <BFormInput id="editTaskName" v-model="editedTask.title" required />
            </BFormGroup>

            <BFormGroup label="Description" label-for="editTaskDescription">
                <BFormTextarea id="editTaskDescription" v-model="editedTask.description" />
            </BFormGroup>

            <BFormGroup label="Start Date" label-for="editTaskStartDate">
                <BFormInput id="editTaskStartDate" v-model="editedTask.date" type="date" />
            </BFormGroup>

            <BFormGroup label="Is Completed" label-for="editTaskIsCompleted">
                <BFormCheckbox id="editTaskIsCompleted" v-model="editedTask.isCompleted" value="Completed" unchecked-value="Not Completed" />
            </BFormGroup>
        </form>
    </div>
</template>

    
<script>
import {

    BButton,
    BFormGroup,

    BFormInput,

    BModal,
    BTable,

} from 'bootstrap-vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        BTable,
        BFormGroup,
        BModal,
        BFormInput,
        BButton,
        
    },
    data() {
        return {
            editedTask: {
                id: null, // Task ID
                title: '',
                description: '',
                date: '',
                isCompleted: 'Not Completed',
                status: 'new'
            },
        }
    },
    computed: {
        ...mapGetters(['tasks']),
    },
    mounted() {
        let id = this.$route.params.id;
        this.editedTask = this.tasks.find(el => el.id == id);
    },
    methods: {
        saveTask() {
            // You can handle the task update logic here, for example, by emitting an event or making an API request.
            // Don't forget to pass the task ID (this.editedTask.id) to identify the task to be edited.
            let id = this.$route.params.id;
            
            for (let i=0 ; i< this.tasks.length ; i++) {
                if(this.tasks[i].id == id) {
                    this.tasks[i] = this.editedTask;
                }
            }
            
            this.$store.dispatch("saveTasks", {
                tasks: this.tasks
            });
            
            // After updating, you can navigate back to the task list or another page.
            this.$router.push("/ToDo");
        },
    },
}
</script>
