<template>
  <div>
    <b-container>
    <b-row>
      <b-col>
        <br/>
        <h3>History</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>

      </b-col>
      <b-col cols="8">
        <data-table :itemsList="historyItems">

        </data-table>
      </b-col>
      <b-col>
        
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    components:{},
        data:
    {
    },
    computed:{
      ...mapGetters(['historyItems'])
    }
}


</script>