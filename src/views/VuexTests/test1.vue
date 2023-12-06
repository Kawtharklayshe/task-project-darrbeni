<template>
    <div class="container">
        hi from VueX test 
        <br>
        <button v-if="liked" > UnLike </button>
        <button  v-if="! liked" > Like </button>

        <div>
            {{ likes }}  Likes
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex';
export default{
    
    computed:{
        ...mapGetters(['liked', 'likes']),
       
    },
    method:{
        toggleLike(){
            console.console.log('dcdndfjkz');
            // this.$store.dispatch('toggleLike1')
        }
    },
}
</script>

<style>
button{
  margin: 20px;
  padding: 5px;
  color: white;
  background-color: black;
}
</style>