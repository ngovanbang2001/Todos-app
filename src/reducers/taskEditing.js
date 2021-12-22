import * as types from "./../constants/actionTypes.js";
const initialState = {};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      const task = {
        id: action.task.id,
        txtName: action.task.txtName,
        txtStatus: action.task.txtStatus,
      };
      return { ...task };
    case types.CLEARADD_FORM:
      return null;
    default:
      return state;
  }
};
export default myReducer;
