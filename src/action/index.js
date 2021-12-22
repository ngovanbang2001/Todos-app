import * as types from "./../constants/actionTypes.js";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};
export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};
export const onToggleForm = () => {
  return {
    type: types.ONTOGGLE_FORM,
  };
};
export const onCloseForm = () => {
  return {
    type: types.ONCLOSE_FORM,
  };
};
export const onOpenForm = () => {
  return {
    type: types.ONOPEN_FORM,
  };
};
export const onClearForm = () => {
  return {
    type: types.CLEARADD_FORM,
  };
};
export const onHandleDelete = (key) => {
  return {
    type: types.DELETE_TASK,
    key,
  };
};
export const onHandleEdit = (task) => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};
export const onChangeStatus = (key) => {
  return {
    type: types.CHANGESTATUS_TASK,
    key,
  };
};
export const onSearch = (name) => {
  return {
    type: types.ONSEARCH_TASK,
    name,
  };
};
export const onSort = (sort) => {
  return {
    type: types.ONSORT_TASK,
    sort,
  };
};
export const onFilter = (filterName, filterStatus) => {
  return {
    type: types.ONFILTER_TASK,
    filterName,
    filterStatus,
  };
};
