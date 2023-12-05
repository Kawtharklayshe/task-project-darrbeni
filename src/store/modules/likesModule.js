const  likesModule = {
    state: {
        liked: false,
        likes: 29,
    },
    getters: {
        liked(state) {
            return state.liked;
        },
        likes(state) {
            return state.likes;
        },
    },
    mutations: {
        toggleLike(state) {
            state.liked = !state.liked;
        },
        increaseLikes(state) {
            state.likes++;
        },
        decreaseLikes(state) {
            state.likes--;
        },
    },
    actions: {
        toggleLike(context) {
            setTimeout(function() {
                context.commit("toggleLike");
                if(context.state.liked) context.commit("increaseLikes");
                else context.commit("decreaseLikes");
            }, 500)
        }
    }
}

export default likesModule;