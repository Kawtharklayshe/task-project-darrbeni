<template>
    <div>
      <b-table striped hover :items="itemsList"></b-table>
    </div>
  </template>
  <script lang="js">
  import 
  {
      BTable
  }from "bootstrap-vue";
  
  export default {
     components:{BTable},
     props:['itemsList'],
     data() {return{
        }
     }
}
  </script>