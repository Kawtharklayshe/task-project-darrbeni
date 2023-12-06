const taskModule ={
    state:{
          taskList: []
    },
    getters:{
        getForm(state){
            return state.form;
        },
        getTasks(state){
            return state.taskList;
        },
    },
    mutations:{
        saveTask(state,payload){
            state.taskList.push({
                id: state.taskList.length + 1,
                name:payload.name,
                descripation:payload.descripation,
                status:payload.status,
                isComplete:payload.isComplete,
            }
               
                )
        }
    },
}
export default taskModule