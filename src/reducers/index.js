import { combineReducers } from "redux";
import tasks from "./task.js";
import isDisplayForm from "./isDisplayForm.js";
import taskEditing from "./taskEditing.js";
import search from "./search.js";
import sort from "./sort.js";
import filter from "./filter.js";
const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  taskEditing,
  search,
  sort,
  filter,
});

export default myReducer;
