import TaskActionTypes from "./action-type";

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   content: "coding",
    //   completed: false,
    // },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return {
        ...initialState,
        todos: [...initialState, todos, action.payload],
      };

    default:
      return state;
  }
};

export default taskReducer;
