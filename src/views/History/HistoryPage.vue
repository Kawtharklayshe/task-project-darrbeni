<template>
  <div>
      <h3>
        This is the complete history of your changes on the system
      </h3>
      <data-table :itemsList="historyItems">

      </data-table>
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