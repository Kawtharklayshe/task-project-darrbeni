
<template>
    <div class="container">

        <AssignTasks @get-data-in-parent="getMyData" />
        <div>
            <b-table striped hover :items="employeeTask" :fields="['fullName', 'taskName']"></b-table>
        </div>
    </div>
</template>


<script>
import AssignTasks from "./assignTasks.vue"
import {

    BTable
} from "bootstrap-vue"




export default {
    components: {
        BTable,
        AssignTasks,
    },

    data() {
        return {
            employeeTask: [],


        }
    },


    methods: {

        getMyData() {
            this.employeeTask = JSON.parse(localStorage.getItem('employeeTask'));
        }
    },
    mounted() {
getMyData()
    }
}



</script>
<style>
.formGroup {
    margin-bottom: 40px;
}
</style>