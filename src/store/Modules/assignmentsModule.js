const assignmentsModule = {
  state: {
    historyItems: JSON.parse(localStorage.getItem("historyItems")) || [],
    assignmentItems: JSON.parse(localStorage.getItem("assignmentItems")) || [],
    employeeItems: JSON.parse(localStorage.getItem("employeeItems")) || [],
    assignmentItems: JSON.parse(localStorage.getItem("assignmentItems")) || [],
    assignmentsExisted:
      (JSON.parse(localStorage.getItem("assignmentItems")) || []).length == 0
        ? false
        : true,
  },
  getters: {
    assignmentsExisted(state) {
      return state.assignmentsExisted;
    },
    assignmentItems(state) {
      return state.assignmentItems;
    },
    taskItems(state) {
      return state.taskItems;
    },
    employeeItems(state) {
      return state.employeeItems;
    },
    historyItems(state) {
      return state.historyItems;
    },
  },
  mutations: {
    reloadPage() {
      window.location.reload();
    },
    /*
      Add Functions 
      */
    addAssignmentToLocal(state, event) {
      state.assignmentItems.push({
        id: state.assignmentItems.length + 1,
        ...event,
      });
    },
    saveAssignmentToStorage(state) {
      localStorage.setItem(
        "assignmentItems",
        JSON.stringify(state.assignmentItems)
      );
    },
    updateHistoryForAddingAssignment(state, event) {
      let newDate = new Date(Date.now()).toDateString();
      state.historyItems.push({
        Id: state.historyItems.length + 1,
        details: `You added a new Assignment with  ${
          { ...event }.responsible
        } as a resposible`,
        Time: newDate,
      });
      localStorage.setItem("historyItems", JSON.stringify(state.historyItems));
    },
    /*
      Update Functions 
      */
    updateAssignmentInLocal(state, event) {
      if ({ ...event }.responsible != "")
        state.assignmentItems[{ ...event }.id - 1].responsible = {
          ...event,
        }.responsible;
      if ({ ...event }.tasks != "")
        state.assignmentItems[{ ...event }.id - 1].tasks = { ...event }.tasks;
      if ({ ...event }.employees != "")
        state.assignmentItems[{ ...event }.id - 1].employees = {
          ...event,
        }.employees;
    },
    updateAssignmentInStorage(state) {
      localStorage.setItem(
        "assignmentItems",
        JSON.stringify(state.assignmentItems)
      );
    },
    updateHistoryForUpdatingAssignment(state, event) {
      let newDate = new Date(Date.now()).toDateString();
      state.historyItems.push({
        Id: state.historyItems.length + 1,
        details: `You have updated an Assignment whose responsible was ${
          { ...event }.responsible
        }`,
        Time: newDate,
      });
      localStorage.setItem("historyItems", JSON.stringify(state.historyItems));
    },
    /*
      Delete Functions
      */
    deleteAssignmentInLocal(state, event) {
      state.assignmentItems = state.assignmentItems
        .slice(0, { ...event }.id)
        .concat(
          state.assignmentItems.slice(
            { ...event }.id + 1,
            state.assignmentItems.length
          )
        );
      state.assignmentItems
        .filter((el) => el.id > { ...event }.id)
        .map((el) => el.id--);
    },
    deleteAssignmentInStorage(state) {
      localStorage.setItem(
        "assignmentItems",
        JSON.stringify(state.assignmentItems)
      );
    },
    deleteHistoryForDeleteAssignment(state, event) {
      let newDate = new Date(Date.now()).toDateString();
      state.historyItems.push({
        Id: state.historyItems.length + 1,
        details: `You have deleted the Assignment whose Responsible is :${
          state.assignmentItems[{ ...event }.id].responsible
        } `,
        Time: newDate,
      });
    },
  },
  //actions
  actions: {
    addAssignment({ commit, state }, event) {
      //saveToLocal
      commit("addAssignmentToLocal", event);

      //saveToStorage
      commit("saveAssignmentToStorage");

      //updateHistory
      commit("updateHistoryForAddingAssignment", event);
      if (state.assignmentItems.length == 1) {
        //reload to show or hide the other features
        commit("reloadPage");
      }
    },
    updateAssignment({ commit, state }, event) {
      if (
        { ...event }.id - 1 < state.assignmentItems.length &&
        { ...event }.id >= 0
      ) {
        //saveToLocal
        commit("updateAssignmentInLocal", event);

        //saveToStorage
        commit("updateAssignmentInStorage");

        //updateHistoryFor
        commit("updateHistoryForUpdatingAssignment", event);
      } else {
        alert("You have Entered a bad id");
      }
    },
    deleteAssignment({ commit, state }, event) {
      if (
        { ...event }.id - 1 < state.assignmentItems.length &&
        { ...event }.id >= 0
      ) {
        //updateHistory
        commit("deleteHistoryForDeleteAssignment", event);

        //saveToLocal
        commit("deleteAssignmentInLocal", event);

        //saveToStorage
        commit("deleteAssignmentInStorage");
      } else {
        alert("You have Entered a bad id");
      }
      if (state.assignmentItems.length == 0) {
        //reload to show or hide the other features
        commit("reloadPage");
      }
    },
  },
};
export default assignmentsModule;
