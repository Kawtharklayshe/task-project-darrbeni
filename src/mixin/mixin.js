 export default{
    data() {
        return { count: 0 }
      },
        mounted:function (){
             this.hello()
        },
        methods: {
            increment: function() { this.count++ },
            hello: function () {
              console.log('hello from mixin!')
            }
          
      }}
  
