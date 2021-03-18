import { ADD, SUBTRACT, RESET } from "../actionTypes";

export const addOne = (dispacth) => {
  return {
    type: ADD,
  };
};

export const subtractOne = (dispacth) => {
  return {
    type: SUBTRACT,
  };
};

export const resetNumber = (dispacth) => {
  return {
    type: RESET,
  };
};
