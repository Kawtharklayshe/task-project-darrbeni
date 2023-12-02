<template>
  <div>
    <b-container>
    <b-row>
      <b-col>
        <h4>
          This is the complete history of your changes on the system
        </h4>
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
import Mixin from '@/mixins/mixin'
export default{
    mixins:[Mixin],
    components:{},
        data:
    {
    }
}


</script>