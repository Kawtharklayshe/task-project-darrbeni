<template>
    <div class="container">
        <div class="header d-flex justify-content-between align-items-center mb-5">
            <h1 class="logo fst-italic text-primary">Edit Employee</h1>
            <button @click="saveEmployee" class="btn btn-primary">Save</button>
        </div>
        <form>
            <BFormGroup label="Employee First Name" label-for="editEmployeeFName">
                <BFormInput id="editFEmployeeName" v-model="editedEmployee.firstName" required />
            </BFormGroup>

            <BFormGroup label="Employee Last Name" label-for="editEmployeeLName">
                <BFormTextarea id="editEmployeeLName" v-model="editedEmployee.lastName" />
            </BFormGroup>

            <BFormGroup label="Employee Email" label-for="editEmployeeEmail">
                <BFormInput id="editEmployeeEmail" v-model="editedEmployee.password" type="password" />
            </BFormGroup>

            <BFormGroup label="Employee Password" label-for="editEmployeePass">
                <BFormInput id="editEmployeePass" v-model="editedEmployee.email" type="email" />
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
            editedEmployee: {
                id: null, // Task ID
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
        }
    },
    mounted() {
        let id = this.$route.params.id;
        let emps = JSON.parse(localStorage.getItem("Employees"));
        this.editedEmployee = emps.find(el => el.id == id);
    },
    methods: {
        saveEmployee() {
            let id = this.$route.params.id;
            let emps = JSON.parse(localStorage.getItem("Employees"));
            
            for (let i=0 ; i< emps.length ; i++) {
                if(emps[i].id == id) {
                    emps[i] = this.editedEmployee;
                }
            }
            window.localStorage.setItem("Employees", JSON.stringify(emps));
            
            // After updating, you can navigate back to the task list or another page.
            this.$router.push("/Employees-List");
        },
    },
}
</script>
