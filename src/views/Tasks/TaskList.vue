<template>
  
    <div>
      <HelloWorld :arr="tasklist"/>
      <b-button v-b-modal.modal-prevent-closing>Add Task</b-button>
  <!-- <div class="container">
    <table>
      <tr>
        <th >Task Name / </th>
        <th>Task Description / </th>
        <th>Task StartDate / </th>
        <th>Task IsComplete / </th>
        <th>Task Status / </th>
      </tr>
      <tr v-for="(task,index) in tasklist" :key="index">
        <td>{{ task.name }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.startdate }}</td>
        <td>{{ task.iscomplete }}</td>
        <td>{{ task.status }}</td>
      </tr>
    </table>
  </div> -->

  <div>
    <b-table striped hover :items="tasklist" @row-clicked="edittask"></b-table>
  </div>
     
  
      <b-modal
        id="modal-prevent-closing" 
        ref="modal"
        title="Add new task"
        @show="resetModal"
        @hidden="resetModal"
        @ok="savetask"
      >
      {{ form }}
<form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="form.name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          label="Description"
          label-for="description"
          invalid-feedback="description is required"
        >
          <b-form-textarea
            id="description"
            v-model="form.description"
            required
          ></b-form-textarea>
        </b-form-group>



        <b-form-group
          label="Date"
          label-for="date"
          invalid-feedback="date is required"
        >
        <b-form-input type='date' v-model="form.startdate" id="date"></b-form-input>
        </b-form-group>


        <b-form-checkbox
      id="checkbox-1"
      v-model="form.iscomplete"
      name="checkbox-1"
      value="yes"
      unchecked-value="no"
    >
    is complete
    </b-form-checkbox>

    <b-form-select v-model="form.status" :options="statusoption" class="form-control"></b-form-select>

      </form>
        </b-modal>

        
        </div>


</template>
  
  <script>
  
import {
  
  BFormInput,
  BModal,
  BButton,
  BFormGroup,
  BFormSelect,
  BTable,

} from 'bootstrap-vue'

import HelloWorld from '@/components/HelloWorld.vue'

    export default {
      data() {
        return {
          name: '',
          nameState: null,
          statusoption:['Old','New'],
          tasklist:[],
        
        form:{
          name:'',
          description:'',
          startdate:'',
          iscomplete:'',
          status:'',
        },

        arr:[2,4,5],
          }
        
      },
      methods: {
        checkFormValidity() {
          const valid = this.$refs.form.checkValidity()
          this.nameState = valid
          return valid
        },
        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleSubmit() {
          // Exit when the form isn't valid
          if (!this.checkFormValidity()) {
            return
          }
          // Push the name to submitted names
          this.submittedNames.push(this.name)
          // Hide the modal manually
          this.$nextTick(() => {
            this.$bvModal.hide('modal-prevent-closing')
          })
        },
        savetask(){
       
          this.tasklist.push({
            id:this.tasklist.length+1,
            name:this.form.name,
            description:this.form.description,
            startdate:this.form.startdate,
            iscomplete:this.form.iscomplete,
            status:this.form.status,
          });
          // this.tasklist.push(form)

        localStorage.setItem('tasks',JSON.stringify(this.tasklist)) ;
          
          // console.log(this.form)
          // this.form.name=''
          // this.form.description=''
          // this.form.startdate=''
          // this.form.status=''
        console.log(this.tasklist)
         

        },
        edittask(task){
          this.$router.push(`/edit/${task.id}`)

        },
        

      
      },
    components:{
      BFormInput,
      BModal,
      BButton,
      BFormGroup,
      BFormSelect,
      BTable,
      HelloWorld
},

  created(){
    console.log('created');
  },
  mounted(){
   
  this.tasklist=JSON.parse(localStorage.getItem('tasks')) || [];
    }
    }
  </script>