const tasksModule={
    state: {
      historyItems:JSON.parse(localStorage.getItem('historyItems'))||[],
      taskItems:JSON.parse(localStorage.getItem('taskItems'))||[],
      tasksExisted:(JSON.parse(localStorage.getItem('taskItems'))||[]).length==0 ? false:true
    },
    getters: {
      tasksExisted(state)
        {
          return state.tasksExisted;
        },
      taskItems(state)
        {
          return state.taskItems;
        },
      historyItems(state)
      {
        return state.historyItems;
      }
    },
    mutations: {
      /*
      reload
      */
      reloadPage()
      {
        window.location.reload()
      },
      /*
      Add Functions 
      */
      addTaskToLocal(state,event){
        state.taskItems.push({ id: state.taskItems.length + 1, ...event });
      },
      saveTaskToStorage(state){
          localStorage.setItem('taskItems',JSON.stringify(state.taskItems));
       },
      updateHistoryForAddingTask(state,event){
        let newDate=new Date(Date.now()).toDateString();
        state.historyItems.push({Id:state.historyItems.length+1,
          details:`You added the Task :${{...event}.name}`,
          Time:newDate})
          localStorage.setItem('historyItems',JSON.stringify(state.historyItems));        
      },
      /*
      Update Functions 
      */
      updateTaskInLocal(state,event){
      if((({...event}.id-1)<state.taskItems.length)&&(({...event}.id-1)>=0 ))
        {
          if ({...event}.name!="")
            state.taskItems[{...event}.id-1].name={...event}.name;
          if ({...event}.description!="")
            state.taskItems[{...event}.id-1].description={...event}.description;
          if ({...event}.duration!="")
            state.taskItems[{...event}.id-1].duration={...event}.duration;
          if ({...event}.difficulty!="")
            state.taskItems[{...event}.id-1].difficulty={...event}.difficulty;
          if ({...event}.startDate!="")
          state.taskItems[{...event}.id-1].startDate={...event}.startDate;
          if ({...event}.endDate!="")
          state.taskItems[{...event}.id-1].endDate={ ...event }.endDate;
        } 
        else
        {
          alert("you entered a bad id")
        }
      }
      ,
      updateTaskInStorage(state){
        localStorage.setItem('taskItems',JSON.stringify(state.taskItems));
      }
      ,
      updateHistoryForUpdatingTask(state,event)
      {
     //updating history 
         let newDate=new Date(Date.now()).toDateString();  
         state.historyItems.push({Id:state.historyItems.length+1,
         details:`You have updated the Task :${{...event}.name}`,Time:newDate});
         localStorage.setItem('historyItems',JSON.stringify(state.historyItems))
      },
      /*
      Delete Functions
      */
      deleteHistoryForDeleteTask(state,event)
      {
      let newDate=new Date(Date.now()).toDateString();  
      state.historyItems.push({Id:state.historyItems.length+1,
      details:`You have deleted the Task :${state.taskItems[{...event}.id].name} `,Time:newDate})
      localStorage.setItem('historyItems',JSON.stringify(state.historyItems))
    }
      ,
      deleteTaskInLocal(state,event)
      {
        state.taskItems=state.taskItems.slice(0,{...event}.id)
         .concat(state.taskItems.slice({...event}.id+1,state.taskItems.length));
          state.taskItems.filter((el) => el.id>{...event}.id).map((el) => el.id--);
      },
      deleteTaskInStorage(state)
      {
        localStorage.setItem('taskItems',JSON.stringify(state.taskItems));      
      }
},
//actions
    actions: {
      addTask({state,commit},event)
      {
         //saveToLocal
       commit('addTaskToLocal',event);
        //saveToStorage
       commit('saveTaskToStorage');
        //updateHistoryForAddingTask
      commit('updateHistoryForAddingTask',event)
        if (state.taskItems.length==1)
        {
          //reload to show or hide the other features
          commit('reloadPage');
        }
      },
      updateTask(context,event)
      {
        //saveToLocal
        context.commit('updateTaskInLocal',event);
        //saveToStorage
        context.commit('updateTaskInStorage');
        //updateHistoryForUpdatingTask
        context.commit('updateHistoryForUpdatingTask',event)
      },
      deleteTask({commit,state},event){
        if((({...event}.id)-1<state.taskItems.length)&&(({...event}.id)>=0 ))
        {
          //updateHistory
          commit('deleteHistoryForDeleteTask',event);
        //saveToLocal
          commit('deleteTaskInLocal',event);
        //saveToStorage
          commit('deleteTaskInStorage');
        }
       else 
       {
        alert('You have Entered a bad id')
       }
        if (state.taskItems.length==0)
        {
          //reload to show or hide the other features
          commit('reloadPage');
        }
      }

    }
}
export default tasksModule
