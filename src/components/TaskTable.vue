<template>
  <div class="container">
  <table class="table">
    <thead>
      <tr>
        <th>Employee Name</th>
        <th>Task</th>
      
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.employeeName }}</td>
        <td>{{ task.employeeTask }}</td>

      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table {
  margin-top: 50px;
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #82bbf8;
  color: #fff;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #cce5ff;
}
</style>