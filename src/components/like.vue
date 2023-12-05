<template>
    <div class="like container text-center my-5 p-5">
        <h1 class="mb-2">Likes Component</h1>
        <div>{{ likes }} likes</div>

        <button class="btn btn-primary" v-if="liked" @click="toggleLike">Unlike</button>
        <button class="btn btn-primary" v-if="!liked" @click="toggleLike">Like</button>
    </div>
</template>

<style>
.like {
    background-color: #eee;
    border-radius: 20px;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(["liked", "likes"]),
    },
    methods: {
        toggleLike() {
            this.$store.dispatch("toggleLike");
        }
    }
}
</script>