<script>
import student from '@/components/student.vue'

export default {
  components: {
    Student: student,
  },
  data() {
    return {
      msg: 'dd',
      dynamicId: 10,
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
}
</script>

<template>
  <div>
    <Student/>
      Message: {{ msg }}
      <BTable
        striped
        hover
        :items="items"
      />
    </student>
  </div>
</template>
