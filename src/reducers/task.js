import * as types from "./../constants/actionTypes.js";

const data = JSON.parse(localStorage.getItem("tasks"));
const initialState = data ? data : [];

const createId = () => {
  var crypto = require("crypto");
  return crypto.randomBytes(20).toString("hex");
};
const myReducer = (state = initialState, action) => {
  const findIndex = (id) => {
    const tasks = state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      if (action.task.id === "") {
        if (action.task.txtName) {
          const ob = {
            id: createId(),
            txtName: action.task.txtName,
            txtStatus: action.task.txtStatus,
          };
          state.push(ob);
        } else {
          return state;
        }
      } else {
        const index = findIndex(action.task.id);
        if (index === -1) {
        } else {
          if (action.task.txtName) {
            state[index] = action.task;
          } else {
            return state;
          }
        }
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      const arr = state;

      arr.splice(action.key, 1);
      state = arr;
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.CHANGESTATUS_TASK:
      const { key } = action;

      const tasks = state;
      const index = findIndex(key);
      console.log(key);
      if (tasks[index].id === key) {
        tasks[index].txtStatus = !tasks[index].txtStatus;
        state = tasks;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducer;
