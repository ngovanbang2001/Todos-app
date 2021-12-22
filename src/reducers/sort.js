import * as types from "./../constants/actionTypes.js";
const initialState = "";
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ONSORT_TASK:
      console.log(action.sort);
      return action.sort;
    default:
      return state;
  }
};
export default myReducer;
