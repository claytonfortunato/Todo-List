import { createSlice } from "react-redux";

const initialState = [];

const addTodoReducer = createSlice({
  //Escrever o reducer
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});
