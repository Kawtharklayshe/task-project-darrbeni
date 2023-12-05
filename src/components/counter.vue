<template>
    <div class="counter container text-center my-5 p-5">
        <h1>Counter</h1>

        <div>Counter : {{ counter }}</div>
        <div>Double Counter : {{ doubleCounter }}</div>
        <div>Multi Counter : {{ multiCounter }}</div>
        <div>
            <input type="number" v-model="num">
        </div>

        <button class="btn btn-primary me-2 mt-2" @click="increase">Increase</button>
        <button class="btn btn-primary me-2 mt-2" @click="decrease">Decrease</button>
        <button class="btn btn-primary me-2 mt-2" @click="n_increase(parseInt(num))">Increase By {{ parseInt(num) }}</button>
    </div>
</template>

<style>
.counter {
    background-color: #eee;
    border-radius: 20px;
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            num: 1
        }
    },
    computed: {
        ...mapGetters(["counter", "doubleCounter"]),
        multiCounter : function() {
            return this.$store.getters.multiCounter(5);
        },
    },
    methods: {
        ...mapMutations(["increase", "decrease"]),
        n_increase(num) {
            return this.$store.commit("n_increase", {
                amount: num,
            })
        }
    }
}
</script>