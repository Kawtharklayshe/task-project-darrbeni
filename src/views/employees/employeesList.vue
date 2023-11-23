<template>
    <div class="container">

        <div class="header d-flex justify-content-between align-items-center">
            <h1 class="logo fst-italic text-primary">Employees List</h1>
            <button @click="goToAdd" class="btn btn-primary">Add Employee</button>
        </div>
        <div class="mt-5 row">
            <Card class="col col-12 col-md-6 col-lg-4" v-for="emp in employees" :id="emp.id" :firstName="emp.firstName" :lastName="emp.lastName" :email="emp.email" :password="emp.password"/>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    components: {
        Card
},
    data() {
        return {
            employees: [],
        }
    },
    mounted() {
        this.employees = JSON.parse(window.localStorage.getItem("Employees")) || [];
    },
    methods: {
        goToAdd() {
            this.$router.push(`/Add-Employee`);
        }

    }
}
</script>