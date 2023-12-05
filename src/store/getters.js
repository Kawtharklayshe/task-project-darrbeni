const getters = {
    counter(state) {
        return state.counter;
    },
    doubleCounter(state) {
        return state.counter * 2;
    },
    multiCounter: state => multi => state.counter * multi
}

export default getters;