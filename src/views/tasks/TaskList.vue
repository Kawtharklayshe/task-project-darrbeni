<template>
    <div class="container">
        <!-- <HelloWorld>
                <template v-slot:header>i am header</template>
                <template v-slot:default>i am middle</template>
                <template v-slot:footer>i am footer</template>
        </HelloWorld> -->
        <!-- <HelloWorld>
            <template v-slot:default="slotProps">
                {{ slotProps.user.firstName }}
            </template>
        </HelloWorld> -->
        <!-- <button @click="increaseOne()">increase</button>
        <div>{{ mixinNum }}</div>
        <div>{{ mixinData }}</div>
        <div>{{ mixinNumSquared }}</div> -->
        
        <div class="header d-flex justify-content-between align-items-center mb-5">
            <h1 class="logo fst-italic text-primary">Task List</h1>
            <button class="btn btn-primary" @click="returnToEmp">Return To Employees Page</button>
            <b-button v-b-modal.modal-prevent-closing variant="primary">Add Task</b-button>
        </div>

        <b-modal id="modal-prevent-closing" ref="modal" title="Add a new task" @show="resetModal" @hidden="resetModal"
            @ok="handleOk">
            <form ref="yu" @submit.stop.prevent="handleSubmit">
                <b-form-group class="formGroup" label="Name" label-for="name-input" invalid-feedback="Name is required" :state="nameState">
                    <b-form-input id="name-input" v-model="name" required :state="nameState"></b-form-input>
                </b-form-group>
                <b-form-group class="formGroup" label="Description" label-for="description-input"
                    invalid-feedback="Description is required" :state="descState">
                    <b-form-textarea id="description-input" v-model="description" required :state="descState"></b-form-textarea>
                </b-form-group>
                <b-form-group class="formGroup" label="Date" label-for="date-input" invalid-feedback="Date is required" :state="dateState">
                    <b-form-datepicker id="date-input" v-model="date" required :state="dateState"></b-form-datepicker>
                </b-form-group>
                <div class="d-flex justify-content-between align-items-centerp">
                    <b-form-group class="formGroup w-50" label="Status" label-for="status-input"
                        invalid-feedback="Status is required">
                        <b-form-select class="form-control" id="status-input" v-model="status" required>
                            hi
                            <b-form-select-option value="new">New</b-form-select-option>
                            <b-form-select-option value="old">Old</b-form-select-option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group class="formGroup" invalid-feedback="Completed is required">
                        <b-form-checkbox class="me-3" id="checkbox-1" v-model="isCompleted" name="checkbox-1"
                            value="Completed" unchecked-value="Not Completed">
                            Completed
                        </b-form-checkbox>
                    </b-form-group>
                </div>
            </form>
        </b-modal>

        <div class="rounded bg-primary p-2 mt-5">
            <b-table @row-clicked="editTask"  class="mb-0" bordered  striped hover :items="tasks" :fields="fields"></b-table>
        </div>
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
    BTable
} from "bootstrap-vue"
import HelloWorld from "@/components/HelloWorld.vue"
import myMixin from '@/mixins/myMixin.js'
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
    },
    mixins: [myMixin],
    data() {
        return {
            name: '',
            nameState: null,
            description: '',
            descState: null,
            date: '',
            dateState: null,
            status: 'new',
            isCompleted: "Not Completed",
            fields: ['title', 'description', 'date', 'isCompleted', 'status'],
            // tasks: []
        }
    },
    computed: {
        ...mapGetters(['tasks']),
    },
    // mounted() {
    //     this.tasks = JSON.parse(window.localStorage.getItem("vueTasks")) || [];
    // },
    methods: {
        checkFormValidity() {
            const valid = this.$refs.yu.checkValidity()
            this.nameState = valid;
            this.descState = valid;
            this.dateState = valid;
            return valid;
        },
        resetModal() {
            this.name = '';
            this.nameState = null;
            this.description = '';
            this.descState = null;
            this.date = '';
            this.dateState = null;
            this.status = 'new',
            this.completed = 'Not Completed'
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
            this.tasks.push({
                id: this.tasks.length + 1,
                title: this.name,
                description: this.description,
                date: this.date,
                isCompleted: this.isCompleted,
                status: this.status
            })
            // add the array of tasks to local storage
            this.$store.dispatch("saveTasks", {
                tasks: this.tasks
            });

            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        },
        editTask(task) {
            this.$router.push(`/edit/${task.id}`);
        },
        returnToEmp() {
            this.$router.push(`/Employees-List`);

        }

    }
}
</script>