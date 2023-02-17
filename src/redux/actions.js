import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  DELETE_ALL,
  DELETE_TODO,
  UPDATE_TODO,
} from "./actionsTypes";

let nextTodoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const handleEdit = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
