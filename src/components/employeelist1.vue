<template>
  <div >
    <div class="employee-card" v-for="el in employee">
    <div class="employee-info" >
    

      <h3>{{ el.firstName }} {{ el.lastName }}</h3>
      <p>Email: {{ el.email }}</p>
      <p>Password: {{ el.password }}</p>
    </div>
    <div class="edit-icon" @click="editEmployee">
      <i class="fas fa-pen"></i>
    </div>
  </div>

  </div>
  
</template>

<script>
export default {
  props: {
    employee: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editEmployee() {
      // Handle the edit logic here
      console.log("Edit employee:", this.employee);
    },
  },
};
</script>

<style scoped>
.employee-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #eaf2f8;
  color: #333;
}

.employee-info {
  flex: 1;
  margin-right: 10px;
}

.edit-icon {
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit-icon i {
  font-size: 16px;
}
</style>