import TaskActionTypes from "./action-type";

const initialState = [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master Redux", completed: false },
  { id: 3, todo: "Watering Plants", completed: true },
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default taskReducer;
