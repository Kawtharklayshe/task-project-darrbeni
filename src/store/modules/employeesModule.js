const  employeesodule = {
    state: {
        employees: [],
    },
    getters: {
        employees(state) {
            return state.employees;
        },
    },
    mutations: {
        saveEmployees(state, payload) {
            state.employees = payload.employees;
        }
    },
    actions: {
        saveEmployees({commit}, obj) {
            commit("saveEmployees", obj)
        }
    }
}

export default employeesodule;