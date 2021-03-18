import { combineReducers } from "redux";
import { ADD, SUBTRACT, RESET } from "../actionTypes";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return (state = state + 1);
    case SUBTRACT:
      return (state = state - 1);
    case RESET:
      return (state = 0);
    default:
      return initialState;
  }
};

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

export default counterReducer;
