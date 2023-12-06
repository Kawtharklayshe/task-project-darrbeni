


<template>
  <div>
    <b-button class="AssignTask" @click="showModal = true">Assign Task To Employee</b-button>

    <AssignTaskModal
      v-model="showModal"
      @employee-task-assigned="handleEmployeeTaskAssigned"
    ></AssignTaskModal>

    <TaskTable :tasks="employeeTaskList"></TaskTable>
  </div>
</template>

<script>
import AssignTaskModal from '@/components/AssignTaskModal.vue';
import TaskTable from '@/components/TaskTable.vue';
import { mapGetters } from "vuex";
export default {
  components: {
    AssignTaskModal,
    TaskTable,
  },
  data() {
    return {
      showModal: false,
      employeeTaskList: [],
    };
  },
  methods: {
    handleEmployeeTaskAssigned(task) {
      this.employeeTaskList.push(task);
       this.$store.dispatch("saveTaskEmployees", {
                taskEmployee: this.taskEmployee
            });
    },
  },
  computed:{
     ...mapGetters([ 'employees', 'tasks']),
  }
};
</script>
<style scoped>
.AssignTask{
   border: 1px solid;
  background-color:  rgba(235, 112, 200, 0.801);;
}
</style>

