<template>
  <div>
    <h3><sapn class="firstChar1">E</sapn>mployee <sapn class="firstChar1">M</sapn>anagement <sapn class="firstChar1">S</sapn>ystem</h3>
    <br />
    <b-container >
      <b-row >
        <b-col variant="info">Employees Number</b-col>
        <b-col>Tasks Number</b-col>
        <b-col>Assignments Number</b-col>
      </b-row>
      <b-row>
        <b-col>{{ employeeItems.length }}</b-col>
        <b-col>{{ taskItems.length }}</b-col>
        <b-col>{{ assignmentItems.length }}</b-col>
      </b-row>
    </b-container>
    <br>
    <img id="systemPicture" src="../../assets/HomeAssets/EMS.jpg" alt="" />
  </div>
</template>
  <script lang="js">
  import {BImg,BContainer,BCol,BRow }from  'bootstrap-vue';
  import {AppList} from '@/components/GeneralComponents/DataTable.vue';
  import { mapGetters } from 'vuex';
  export default {
  components:{AppList,BImg,BContainer,BCol,BRow},
    data(){
      return {}
    },
    computed:{
      ...mapGetters(['assignmentItems','taskItems','employeeItems'])
    }
  }
</script>
<style>
.firstChar1
{
  color:rgba(11, 98, 230, 0.801);
}
#systemPicture {
  width: 350px;
  height: 350px;
}
</style>
  