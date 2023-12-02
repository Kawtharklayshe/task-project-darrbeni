<template>
    <div>
      <b-button variant="danger" v-b-modal.task-modal-3 @click="erase"><pre>Delete      <br>   Employee</pre></b-button>
      <b-modal
        id="task-modal-3"
        ref="modal"
        title="Deleting Employee"
        @ok="deleteEmployee"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="Id :"
            label-for="id-input"
            invalid-feedback="Id is required"
          >
            <b-form-input
              id="id-input"
              v-model="id"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </template>
    <script>
  export default {
   components:{

   }
   ,
   data(){return {
    id:"",
   }}
   ,
   methods:
   {
    erase(){
      (this.id="")
    },
    deleteEmployee(){
        this.$emit("deletingEmployee",{id:this.id-1})
    }
   }
  }
  </script>
    