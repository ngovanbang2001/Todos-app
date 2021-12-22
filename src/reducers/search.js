import * as types from "./../constants/actionTypes.js";
const initialState = "";
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ONSEARCH_TASK:
      return action.name;
    default:
      return state;
  }
};
export default myReducer;
