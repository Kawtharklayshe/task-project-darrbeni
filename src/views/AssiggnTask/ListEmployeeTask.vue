<template>
  <div class="container">
    <table>
      <tr>
        <th>FullName</th>
        <th>Tasks</th>
      </tr>
      <tbody>
          <tr v-for="(employee, index) in employeetasklist" :key="index">
          <td>{{ employee.employeeName }}</td>
          <td>
            <ul>
              <li v-for="(task, taskIndex) in employee.employeeTask" :key="taskIndex">{{ task }}</li>
            </ul>
          </td>
        </tr>
</tbody>
</table>
<AssignTaskToEmployee @getData="getFromLocalStorage"/>
</div>
</template>

<script>
import { BButton } from "bootstrap-vue";
import AssignTaskToEmployee from "./AssignTaskToEmployee.vue";

export default {
  components: {
    BButton,
    AssignTaskToEmployee,
  },
//   props: {
//     employeetasklist: {
//       type: Array,
     
//     },
  data() {
    return {
      employeeTaskList:[],
    };
  },
  methods: {
    // getFromLocalStorage() {
    //   const savedTaskEmployee = localStorage.getItem("employeetasklist");
    //   if (savedTaskEmployee) {
    //     this.employeetasklist = JSON.parse(savedTaskEmployee);
    //   }
    // },
    // getFromLocalStorage(employeeTaskList) {
    //   const savedTaskEmployee = localStorage.getItem("employeetasklist");
    //   if (savedTaskEmployee) {
    //     this.employeetasklist = JSON.parse(savedTaskEmployee);
    //   }
    // },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.logo {
  margin: 0;
}
</style>