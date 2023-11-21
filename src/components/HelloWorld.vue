<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    myNewArray:Array
  },
}
</script>

<template>
  <div class="hello">
    <h1>HELLO   {{msg}}</h1>
<div v-for="item in myNewArray">

this is my item{{item}}



</div>

  </div>
</template>

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
