import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_ALL,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actionsTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [...state.todos, { content, completed: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.content = data.content;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      return updatedArray;

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((product) => product.id !== action.payload),
      };

    case DELETE_ALL:
      return {
        todos: [],
      };

    default:
      return state;
  }
};

export default todos;
