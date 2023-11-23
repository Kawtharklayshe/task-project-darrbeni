


<template>
  <div>
    <b-button variant="outline-primary" @click="showModal = true">Assign Task To Employee</b-button>

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
    },
  },
};
</script>

