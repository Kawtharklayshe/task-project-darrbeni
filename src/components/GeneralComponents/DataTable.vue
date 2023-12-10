<template>
    <div>
      <p id="edit">
      </p>
       <b-table striped hover :items="itemsList"  bordered sticky-header="true" fixed  class="data-table"></b-table>
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
     data() {
      return{
        
    }
  }
}


  </script>
<style>
.data-table{
  position: relative;
  top: 30px;
  max-height: 420px;
}
</style>