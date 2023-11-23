<script>
import {
  BCard

}
  from 'bootstrap-vue'
export default {
  components: {
    BCard,

  },
 
  props: {
    employee: Object,
  },
  computed: {
    fullName() {
      return this.employee.firstName + ' ' + this.employee.lastName
    }
  },
  methods:{
    editEmployee(){
      this.$emit('getData');
      this.$router.push({name : "EditEmployee", params:{id: this.employee.id}})

      
    
    },
    x(){
            this.$router.push({name : "EditEmployee", params:{id: this.employee.id}})

    }
   

  }
  
}
</script>

<template>
  <div>
    <b-card-group deck>
      <b-card header="Company Name" 
      header-tag="header"
      title=''>
      <div>
        <b-icon @click= "editEmployee" icon="pencil-square"></b-icon>
      </div>
     <h1>{{ fullName }}</h1>
     <div class='info'>  
        <p class="h3">ID: <span>{{ employee.id }}</span></p>
        <p class="h3">EMAIL: <span>{{ employee.emaile }}</span></p>
        <p class="h3">PASSWORD: <span>{{ employee.passWord }}</span></p>
     
      </div>
      
      </b-card>
    </b-card-group>

    <!-- <b-card header="Company Name" header-tag="header" no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
         <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
        </b-col> 
        <b-col>
          <b-card-body title="About" style="text-align: left;" class="row">

            <p>ID: <span>{{ employee.id }}</span></p>
            <p>FULLNAME: <span>{{ fullName }}</span></p>
            <p>EMAIL: <span>{{ employee.emaile }}</span></p>
            <p>PASSWORD: <span>{{ employee.passWord }}</span></p>

          </b-card-body>
        </b-col>
      </b-row>
    </b-card> -->
  </div>
</template>
<style>
.info{
  text-align: left;
}
</style>

