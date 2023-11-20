<template>
  <div id="app">
    <nav>
      <router-link id="link1" to="/employee-list-page">Employee List Page</router-link>
    </nav>
    <router-view/>
    
  </div>
</template>

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
  color:red;
}

nav #link1
{
   text-decoration:none; 
   font-size:30px;
   font-style: italic;
}
</style>
