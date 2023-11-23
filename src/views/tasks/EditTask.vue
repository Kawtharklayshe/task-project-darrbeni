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
    mounted() {
        let id = this.$route.params.id;
        let number = this.$route.params.number;
        let tasks = JSON.parse(localStorage.getItem("vueTasks"));
        let arr=tasks[number] || [];
        this.editedTask = arr.find(el => el.id == id);
    },
    methods: {
        saveTask() {
            // You can handle the task update logic here, for example, by emitting an event or making an API request.
            // Don't forget to pass the task ID (this.editedTask.id) to identify the task to be edited.
            let id = this.$route.params.id;
            let number = this.$route.params.number;
            let tasks = JSON.parse(localStorage.getItem("vueTasks"));
            let arr=tasks[number] || [];
            
            for (let i=0 ; i< arr.length ; i++) {
                if(arr[i].id == id) {
                    arr[i] = this.editedTask;
                }
            }
            tasks[number] = arr;
            window.localStorage.setItem("vueTasks", JSON.stringify(tasks));
            
            // After updating, you can navigate back to the task list or another page.
            this.$router.push("/ToDo");
        },
    },
}
</script>
