export default {
    data() {
        return {
            mixinName: "hani",
            mixinNum: 1,
            mixinData: []
        }
    },
    computed: {
        mixinNumSquared: function() {
            return this.mixinNum ** 2;
        }
    },
    methods:  {
        increaseOne() {
            this.mixinNum++;
        }
    },
    mounted() {
        this.mixinData.push("Hani", "Maha");
    }
}