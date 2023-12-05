const  tasksodule = {
    state: {
        tasks: [],
    },
    getters: {
        tasks(state) {
            return state.tasks;
        },
    },
    mutations: {
        saveTasks(state, payload) {
            state.tasks = payload.tasks;
        }
    },
    actions: {
        saveTasks({commit}, obj) {
            commit("saveTasks", obj)
        }
    }
}

export default tasksodule;