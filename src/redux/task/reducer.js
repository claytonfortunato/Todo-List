import TaskActionTypes from "./action-type";

const initialState = {
  todos: [
    {
      id: 1,
      content: "coding",
      completed: false,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state.todos;
  }
};

export default taskReducer;
