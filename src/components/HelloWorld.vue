<template>
  <div class="hello">
    <!-- <div>hi i am first div</div>
    <slot name="header">1</slot>
    <div>hi i am second div</div>
    <slot>2</slot>
    <div>hi i am third div</div>
    <slot name="footer">3</slot> -->

    <slot :user="user">
      {{ user.lastname }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    names: Array
  },
  data() {
    return {
      user: {
        firstName: 'hani',
        lastname: 'salloum'
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
