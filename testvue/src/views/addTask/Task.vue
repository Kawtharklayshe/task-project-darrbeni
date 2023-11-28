<script>
import {
  BButton,
  BFormGroup,
  BFormInput,
  BModal,
  BFormTextarea,
  BFormCheckbox,
  BFormSelect,
}
  from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
    BFormSelect,
  },
  data() {
    return {
    newtask:'',
      options: ["new","old"],
      items:[
             
            ],
      task:{
              id:'',
              description:'',
              name:'',
              startdate:'',
             isComplete:"",
            
            },
    }
  },
  mounted(){
this.items = JSON.parse(localStorage.getItem("task") || '[]')
console.log("mounted")
  },
  create(){
 console.log("created")
 },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()

      this.name = valid
     
      return valid
    },
    resetModal() {
      this.name=''
      this.description=''
      this.startdate=''
      this.isComplete=''
      

    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()

      // Trigger submit handler
      this.handleSubmit()
    },
    // addtask(){
    //   this.items.push({...this.newtask})
    //   localStorage.setItem('item',JSON.stringify(this.items))
    // },
    saveTask() {

     this.items.push(
      {id:this.items.length +1,
      name:this.task.name,
       description:this.task.description,
        startdate:this.task.startdate,
        status:this.task.isComplete,
      });
      localStorage.setItem("task",JSON.stringify(this.items))
    //   this.items.push(this.task);
    //   //  this.task.name=''
    //   // this.task.description=''
    //   // this.task.startdate=''
    //   // this.task.isComplete=''
    //   console.log(this.items)

    // // showData(this.items);
    //   // Hide the modal manually
    //   this.$nextTick(() => {
    //     this.$bvModal.hide('modal-prevent-closing')
    //   })
    },
    //  showData(items){
        //  } 
        edittask(task){
          // console.log(task)
          this.$router.push({name:'edittask',params:{id:task.id}})
        }    

  
      },
}
</script>

<template>
  <div>
    <BButton v-b-modal.modal-prevent-closing>
      Add Task
    </BButton>


    <BModal
      id="modal-prevent-closing"
      ref="modal"
      title="Add New Task"
      @show="resetModal"
      @hidden="resetModal"
      @ok="saveTask"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <BFormGroup 
          label="TaskName :"
          label-for="name-input"
          invalid-feedback="Name is required"
         
        >
          <BFormInput
          ref="titlename"
            id="name-input"
            v-model="task.name"
           class="mt-3 "
            required
          />
        </BFormGroup>
        <label for="textarea" class="mt-3">Description :</label>
       <b-form-textarea
        ref="description"
       v-model="task.description"
       class="mt-3"
    id="textarea"
    placeholder="Task Description"
    rows="3"
  ></b-form-textarea>
    <BFormGroup
        label="DueDate :"
          label-for="Date"
          class="mb-3 mt-3"
         
        >
          <BFormInput
          ref="date"
          type="date"
            id="Date"
            v-model="task.startdate"
           class="mt-3"
            required
          />
        </BFormGroup>
     <b-form-checkbox
      id="checkbox-1"
      v-model="task.isComplete"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     completed
    </b-form-checkbox>
      </form>
    </BModal>
     <div>
    <b-table striped hover :items="items" @row-clicked="edittask">
      <tr>
               <th>id</th>
                <th>name</th>
                <th>description</th>
                <th> date</th>
                <th>status</th>
              </tr>
              <tr v-for="(item,index) in items" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.startdate}}</td>
                <td>{{item.isComplete}}</td>
              </tr>
    </b-table>
  </div>
              <!-- <table class="table table-striped mt-5 ">
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
                <th> date</th>
                <th>status</th>
              </tr>
              <tr v-for="(item,index) in items" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.startdate}}</td>
                <td>{{item.isComplete}}</td>



              </tr>
            </thead>
          </table> -->
  </div>
</template>