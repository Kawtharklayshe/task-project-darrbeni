<template>
    <div class="container">
        <AssignTask @save-table="showTable" />
        <div class="container">
            <div class="rounded bg-secondary p-2 mt-5">
                <b-table class="mb-0" bordered striped hover :items="taskEmployee" :fields="tableFields"></b-table>
            </div>
        </div>
    </div>
</template>

<script>
import {
    BTable
} from "bootstrap-vue"
import AssignTask from "./assignTask.vue";

export default {
    components: {
        BTable,
        AssignTask,
    },
    data() {
        return {
            taskEmployee: [],
            tableFields: ["fullName", "task"]
        }
    },
    mounted() {
        showData();
    },
    methods: {
        showTable() {
            this.taskEmployee = JSON.parse(window.localStorage.getItem("taskEmployee"));
        }
    }
}
</script>