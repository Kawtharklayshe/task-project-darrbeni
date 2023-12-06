const assignModule={
    state: {
        taskEmployee: []
    },
    getters: {
        taskEmployee(state) {
            return state.taskEmployee;
        },
    },
    mutations: {
        saveTaskEmployees(state, payload) {
            state.taskEmployee = payload.taskEmployee;
        }
    },
    actions: {
        saveTaskEmployees({commit}, obj) {
            commit("saveTaskEmployees", obj)
        }
    }
}
export default assignModule