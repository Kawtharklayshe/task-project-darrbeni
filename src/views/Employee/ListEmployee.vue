<template>
    <div>
  <b-button v-b-modal.modal-1>ADD Employee</b-button>

  <b-modal id="modal-1" title="Add a new Employee">
   
    <!-- form -->
    <div>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">FirstName</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Enter your FirstName"
      v-model="form.firstname"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-name">LastName</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Enter your LastName"
      v-model="form.lastname"
    ></b-form-input>

    <label class="sr-only" for="inline-form-input-name" typeof="email">Email</label>
    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Enter your email"
      v-model="form.email"
    ></b-form-input>

    <label class="label">Password</label>
      <div class="field has-addons">
         <div class="control is-expanded">
           <input v-if="showPassword" type="text" class="input" v-model="form.password" />
           <input v-else type="password" class="input" v-model="password">
          </div>
  </div>

    

    
  </b-form>
</div>
<!-- end form -->
  </b-modal>
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
            editedEmployee: {
                id: null, // Task ID
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
        }
    },
    computed: {
        ...mapGetters(['employees']),
    },
    mounted() {
        let id = this.$route.params.id;
        this.editedEmployee = this.employees.find(el => el.id == id);
    },
    methods: {
        saveEmployee() {
            let id = this.$route.params.id;
            
            for (let i=0 ; i< this.employees.length ; i++) {
                if(this.employees[i].id == id) {
                    this.employees[i] = this.editedEmployee;
                }
            }

            this.$store.dispatch("saveEmployees", {
                employees: this.employees
            });
            
            // After updating, you can navigate back to the task list or another page.
            this.$router.push("/Employees-List");
        },
    },
}
</script>

