<script>
import addemployee2 from '@/views/Employee/addemployee2.vue';



export default {
    components:{
      addemployee2,
    },
    data() {
        return {
            employees:[]
        };
    },
    props:{
        arr:Array,
    }
    
};

</script>
<template>
 
     <div>
        <addemployee2 :arr="employees"/>
    <div class="card text-bg-info" v-for="employee in employees" :key="employee.id"  >
      <div class="card-body">
        <h5 class="card-title">{{ employee.fullname }}</h5>
        <p class="card-text">{{ employee.email }}</p>
        <p class="card-text">{{ employee.password }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
  display: inline-block;
}
</style>