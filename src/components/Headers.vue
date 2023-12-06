<template>
    <div >
      <b-navbar toggleable="lg" type="dark" class="navbar row">
        <router-link to="/home" id="brand" exact class="col-2">
        <b-navbar-brand>
          <p class="logo">
            Task-Vue2
          </p>
             </b-navbar-brand>
       
          </router-link>
        
         <p  class="col-6"></p>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
                <b-nav tabs >
                  
                  <b-nav-item>
                    <router-link class="router" to="/addtask" tag="li">Tasks </router-link>
                  </b-nav-item>
                  <b-nav-item>
                    <router-link class="router" to="/addEmployee" tag="li">Employees</router-link>
                  </b-nav-item>
                  <b-nav-item>
                    <router-link class="router" to="/assignEmployee" tag="li">Assignments</router-link>
                  </b-nav-item>
                  </b-nav> 
          </b-navbar-nav> 
        </b-collapse>
      </b-navbar>
     
    </div>
    
</template>
<script>
import {
  BBadge,
  BNavItem,
  BNavbar,
  BCollapse,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
} from "bootstrap-vue";
export default {
  BBadge,
  BNavItem,
  BNavbar,
  BCollapse,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
};
</script>
<!-- We styled our header using Bootstrap -->
<style>
.logo{
    font-family: cursive;
    font-size: 40px;
}
.navbar{
    background-color: rgb(187, 173, 187);
}
#brand {
  text-decoration: none;
  font-style: italic;
  color: white;
  }
.router {
 font-family: cursive;
  font-size: 20px;
  font-weight: 700;
  color: white;
}
.router-link-exact-active {
  color: rgba(235, 112, 200, 0.801);
  font-size: 20px;
}
</style>