<template>
  <div id="app">
    <!-- App header Component -->
    <app-header>
    </app-header>
    <br>
    <router-view/>
  </div>
</template>
<script>
import AppHeader from  './components/AppComponents/AppHeader.vue'
export default {
  components:{AppHeader},
  el:'#app',
  data(){
    return {}
  }

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: white;
}



</style>
