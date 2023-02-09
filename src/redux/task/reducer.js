import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from "./actions";

const initialState = [
  {
    id: 1,
    todo: "Buy Laptop",
    completed: false,
    time: new Date().toLocaleString(),
  },
  // { id: 2, todo: "Master Redux", completed: false },
  // { id: 3, todo: "Watering Plants", completed: true },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      const filteredTodos = state.filter(
        (todos) => todos.id !== action.payload
      );
      return filteredTodos;

    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};
