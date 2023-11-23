<template>
  <div class="container pt-5">
    <div class="row gap-3">
      <Card class="col-12 col-sm-6 col-md-4" v-for="person in persons" :personName="person.name" :personJob="person.job"
        :personDesc="person.desc" />
    </div>
  </div>
</template>

<script>

import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
body {
  background-color: #eee;
}
</style>
