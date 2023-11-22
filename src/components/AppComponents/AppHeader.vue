<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <router-link to="/home" id="brand" exact>
        <b-navbar-brand></b-navbar-brand>
          <b-badge pill variant="danger"><span class="firstChar">E</span>mployee <br> <span class="firstChar">M</span>anagment <br><span class="firstChar">S</span>ystem </b-navbar-brand>
       
       </b-badge>   </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
                <b-nav tabs >
                  <b-nav-item >
                    <router-link class="router" to="/home" tag="li" > Home</router-link>
                  </b-nav-item>
                  <b-nav-item>
                    <router-link class="router" to="/employee-page" tag="li">Employee</router-link>
                  </b-nav-item>
                  <b-nav-item>
                    <router-link class="router" to="/task-page" tag="li">Tasks </router-link>
                  </b-nav-item>
                  <b-nav-item>
                    <router-link class="router" to="/assignments-page" tag="li">Assignments</router-link>
                  </b-nav-item>
                  </b-nav> 
          </b-navbar-nav> 
        </b-collapse>
      </b-navbar>
     
    </div>
    
</template>
<script>
import { BBadge,BNavItem,BNavbar,BCollapse,BNavbarBrand,BNavbarToggle,BNavbarNav} from 'bootstrap-vue';
export default {
 BBadge, BNavItem,BNavbar,BCollapse,BNavbarBrand,BNavbarToggle,BNavbarNav
}
</script>
<!-- We styled our header using Bootstrap -->
<style>
.firstChar
{
  color:#0080ff;
}
#brand
{
  text-decoration:none; 
  font-size:20px;
  font-style: italic;
  color:white;
  text-decoration: none;
}
.router
{
   text-decoration:none; 
   font-size:20px;
   font-weight: 700;
   color:white;
}
</style>