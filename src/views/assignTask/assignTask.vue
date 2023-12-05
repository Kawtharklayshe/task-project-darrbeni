<template>
    <div>
        <div class="header d-flex justify-content-between align-items-center">
            <h1 class="logo fst-italic text-primary">Assign Task to Employee</h1>
            <b-button v-b-modal.modal-prevent-closing variant="primary">Assign Task</b-button>
        </div>

        <b-modal id="modal-prevent-closing" ref="modal" title="Assign Task to Employee" @show="resetModal"
            @hidden="resetModal" @ok="handleOk">
            <form ref="employeeForm" @submit.stop.prevent="handleSubmit">
                <b-form-group class="formGroup" label="Employee Full Name" label-for="employee-input">
                    <b-form-select class="form-control" id="employee-input" v-model="employee" required>
                            <b-form-select-option v-for="emp in employees" :value="emp.firstName + ' ' + emp.lastName">{{ emp.firstName + ' ' + emp.lastName}}</b-form-select-option>
                    </b-form-select>
                </b-form-group>
                <b-form-group class="formGroup" label="Task Title" label-for="task-input">
                    <b-form-select multiple class="form-control" id="task-input" v-model="task" required>
                            <b-form-select-option v-for="task in tasks" :value="task.title">{{ task.title}}</b-form-select-option>
                    </b-form-select>
                </b-form-group>
                <b-form-group class="formGroup" label="Start Date" label-for="start-date-input" >
                    <b-form-datepicker id="start-date-input" v-model="startDate" required></b-form-datepicker>
                </b-form-group>
                <b-form-group class="formGroup" label="Date" label-for="end-date-input" >
                    <b-form-datepicker id="end-date-input" v-model="endDate" required></b-form-datepicker>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<style>
.formGroup {
    margin-bottom: 40px;
}
</style>
  
<script>
import {
    BModal,
    BForm,
    BFormGroup,
    BFormCheckbox,
    BFormInput,
    BButton,
    BFormTextarea,
    BFormDatepicker,
    BFormSelect,
    BFormSelectOption,
    BTable,
    BDropdown,
    BDropdownItem
} from "bootstrap-vue"

import { mapGetters } from "vuex";

export default {
    components: {
        BModal,
        BForm,
        BFormGroup,
        BFormCheckbox,
        BFormInput,
        BButton,
        BFormTextarea,
        BFormDatepicker,
        BFormSelect,
        BFormSelectOption,
        BTable,
        BDropdown,
        BDropdownItem
    },
    data() {
        return {
            employee: '',
            task: [],
            startDate: '',
            endDate: '',
            taskEmployee: [],
        }
    },
    computed: {
        ...mapGetters([ 'employees', 'tasks']),
    },
    // mounted() {
    //     this.employees = JSON.parse(window.localStorage.getItem("Employees")) || [];
    //     this.tasks = JSON.parse(window.localStorage.getItem("vueTasks")) || [];
    //     // this.taskEmployee = JSON.parse(window.localStorage.getItem("taskEmployee")) || [];

    // },
    methods: {
        checkFormValidity() {
            const valid = this.$refs.employeeForm.checkValidity();
            return valid;
        },
        resetModal() {
            this.employee = '';
            this.task = [];
            this.startDate = '';
            this.endDate = '';
        },
        handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }
            // Push the name to submitted names
            this.taskEmployee.push({
                id: this.taskEmployee.length + 1,
                fullName: this.employee,
                task: this.task,
                startDate: this.startDate,
                endDate: this.endDate,
            });

            // add the array of tasks to local storage
            this.$store.dispatch("saveTaskEmployees", {
                taskEmployee: this.taskEmployee
            });

            this.$emit('save-table');

            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }

    }
}
</script>