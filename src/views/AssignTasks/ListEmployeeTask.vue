<template>
    <div>
        <AssignTaskEmployee  @getitems="retrieveFromLocalStorage"/>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>
<script>
import  { BTable } from "bootstrap-vue";
import AssignTaskEmployee from "./AssignTaskEmployee.vue";
export default {
   components:{
        BTable,
        AssignTaskEmployee
    },
 data() {
      return {
       items:[],
        }
    },
    methods: {
        retrieveFromLocalStorage() {
        const saved = localStorage.getItem("items");
        if (saved) {
          this.items = JSON.parse(saved);
        }
        },

    }}

</script>