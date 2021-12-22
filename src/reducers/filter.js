import * as types from "./../constants/actionTypes.js";
const initialState = "";
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ONFILTER_TASK:
      var { filterName, filterStatus } = action;
      filterStatus = parseInt(filterStatus, 10);
      var obj = { name: filterName, status: filterStatus };
      return obj;
    default:
      return state;
  }
};
export default myReducer;
