<template>
    <div class="person text-start">
        <h3 class="person-name">{{ fullName }}</h3>
        <p class="person-email"><span class="fw-bold">Email: </span> {{ email }}</p>
        <p class="person-pass"><span class="fw-bold">Password: </span> {{ password }}</p>
        <div class="d-flex justify-content-end align-items-center">
            <button class="m-3 btn btn-primary " @click="editEmployee(id)">Edit Employee</button>
        </div>
    </div>
</template>

  
<script>
export default {
    name: 'HelloWorld',
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        email: String,
        password: String
    },
    computed: {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    methods: {
        editEmployee(i) {
            this.$router.push(`/Edit-Employee/${i}`);
        }
    }
}
</script>

<style>
.person {
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.person .person-name {
    color: #333;
    font-weight: bold;
}
.person .person-email,
.person .person-pass {
    color: #777;
    font-size: 14px;
}
</style>