const employeesModule={
    state: {
      historyItems:JSON.parse(localStorage.getItem('historyItems'))||[],
      employeeItems:JSON.parse(localStorage.getItem('employeeItems'))||[],
      employeesExisted:(JSON.parse(localStorage.getItem('employeeItems'))||[]).length==0 ? false:true
    },
    getters: {
      employeesExisted(state)
        {
          return state.employeesExisted;
        },
      employeeItems(state)
        {
          return state.employeeItems;
        },
      historyItems(state)
      {
        return state.historyItems;
      }
    },
    mutations: {
        reloadPage()
        {
          window.location.reload()
        },
      /*
      Add Functions 
      */
      addEmployeeToLocal(state,event){
        state.employeeItems.push({ id: state.employeeItems.length + 1, ...event });
      },
      saveEmployeeToStorage(state){
          localStorage.setItem('employeeItems',JSON.stringify(state.employeeItems));
       },
      updateHistoryForAddingEmployee(state,event){
        let newDate=new Date(Date.now()).toDateString();
          state.historyItems.push({Id:state.historyItems.length+1,
           details: `You added a new ${{...event}.fname+" "+{...event}.lname} to the employees`,Time:newDate})
          localStorage.setItem('historyItems',JSON.stringify(state.historyItems));        
      },
      /*
      Update Functions 
      */
     /*
     */
      updateEmployeeInLocal(state,event){
      if((({...event}.id-1)<state.employeeItems.length)&&(({...event}.id)>=0 ))
        {
            console.log(event);
           if ({...event}.fname!="")
             state.employeeItems[{...event}.id-1].fname={...event}.fname;
           if ({...event}.lname!="")
             state.employeeItems[{...event}.id-1].lname={...event}.lname;
             if ({...event}.age!="")
             state.employeeItems[{...event}.id-1].age={...event}.age;
           if ({...event}.startDate!="")
             state.employeeItems[{...event}.id-1].startDate={...event}.startDate;
           if ({...event}.ex!="")
            state.employeeItems[{...event}.id-1].ex={...event}.ex;
           if ({...event}.endDate!="")
            state.employeeItems[{...event}.id-1].endDate={...event}.endDate
            if ({...event}.email!="")
             state.employeeItems[{...event}.id-1].email={...event}.email;
         }
        else
        {
          alert("you entered a bad id")
        }
    },
      updateEmployeeInStorage(state){
        localStorage.setItem('employeeItems',JSON.stringify(state.employeeItems));
      }
      ,
      updateHistoryForUpdatingEmployee(state,event)
      {
         let newDate=new Date(Date.now()).toDateString();  
         console.log(state.historyItems.length+1);
         state.historyItems.push({Id:state.historyItems.length+1,
         details:`You have updated the Employee :${{...event}.fname}`,Time:newDate})
         localStorage.setItem('historyItems',JSON.stringify(state.historyItems))
      }
      ,
      /*
      Delete Functions
      */
     deleteEmployeeInLocal(state,event)
     {
        console.log("//////")
        state.employeeItems=state.employeeItems.slice(0,{...event}.id)
        .concat(state.employeeItems.slice({...event}.id+1,state.employeeItems.length));
        state.employeeItems.filter((el) => el.id>{...event}.id).map((el) => el.id--);
     },
     deleteEmployeeInStorage(state)
     {
        localStorage.setItem('employeeItems',JSON.stringify(state.employeeItems));
     }
     ,
     deleteHistoryForDeleteEmployee(state,event)
     {
      let newDate=new Date(Date.now()).toDateString();  
      state.historyItems.push({Id:state.historyItems.length+1,
      details:`You have deleted the Employee :${state.employeeItems[{...event}.id].fname} `,Time:newDate})
      localStorage.setItem('historyItems',JSON.stringify(state.historyItems))
     }
    },
    //actions
    actions: {
      addEmployee({state,commit},event)
      {
        //updateHistory
      commit('updateHistoryForAddingEmployee',event)
        //saveToLocal
      commit('addEmployeeToLocal',event);
        //saveToStorage
      commit('saveEmployeeToStorage');
        if (state.employeeItems.length==1)
        {
          //reload to show or hide the other features
          commit('reloadPage');
        }
      },
      updateEmployee({commit,state},event)
      {
        if((({...event}.id)-1
        <state.employeeItems.length)&&(({...event}.id)>=0 ))
        {
        //saveToLocal
        commit('updateEmployeeInLocal',event);
        //saveToStorage
        commit('updateEmployeeInStorage');
        //updateHistoryFor
        commit('updateHistoryForUpdatingEmployee',event)
        }
        else
        {
          alert('You have Entered a bad id')
        }
      },
      deleteEmployee({commit,state},event){
        console.log({...event}.id)
        if((({...event}.id)-1<state.employeeItems.length)&&(({...event}.id)>=0 ))
        {
          //updateHistory
          commit('deleteHistoryForDeleteEmployee',event);
        //saveToLocal
          commit('deleteEmployeeInLocal',event);
        //saveToStorage
          commit('deleteEmployeeInStorage');
        }
       else 
       {
        alert('You have Entered a bad id')
       }
       
        if (state.employeeItems.length==0)
        {
          //reload to show or hide the other features
          commit('reloadPage');
        }

      }
    }
}
export default employeesModule
