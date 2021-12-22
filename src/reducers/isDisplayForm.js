import * as types from "./../constants/actionTypes.js";
const initialState = false;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ONTOGGLE_FORM:
      return !state;
    case types.ONCLOSE_FORM:
      return false;
    case types.ONOPEN_FORM:
      return true;
    default:
      return state;
  }
};
export default myReducer;
