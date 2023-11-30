export default {
    data(){
        return {
            historyItems:JSON.parse(localStorage.getItem('historyItems'))||[]
        }
    },
    watch:
    {
     historyItems(){
        localStorage.setItem('historyItems',JSON.stringify(this.historyItems))
     }
    },
    computed: {
        historyItems(){
            return JSON.parse(localStorage.getItem('historyItems'))||[]
        }
    }
};