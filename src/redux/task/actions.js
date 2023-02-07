import TaskActionTypes from "./action-type";

export const addTaskToList = (payload) => ({
  type: TaskActionTypes.ADD_TASK,
  payload,
});

export const removeTaskFromList = (payload) => ({
  type: TaskActionTypes.REMOVE_TASK,
  payload,
});
