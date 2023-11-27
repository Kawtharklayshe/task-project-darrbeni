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
        <b-col>{{ employeeNumber }}</b-col>
        <b-col>{{ taskNumber }}</b-col>
        <b-col>{{ assignmentNumber }}</b-col>
      </b-row>
    </b-container>
    <br>
    <img id="systemPicture" src="../../assets/HomeAssets/EMS.jpg" alt="" />
  </div>
</template>
  <script lang="js">
  import {BImg,BContainer,BCol,BRow }from  'bootstrap-vue';
  import {AppList} from '@/components/GeneralComponents/DataTable.vue';
  export default {
  components:{AppList,BImg,BContainer,BCol,BRow},
    data(){
      return {
        employeeNumber:(JSON.parse(localStorage.getItem('employeeItems'))||[]).length,
        taskNumber:(JSON.parse(localStorage.getItem('taskItems'))||[]).length,
        assignmentNumber:(JSON.parse(localStorage.getItem('assignmentItems'))||[]).length
    }
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
  