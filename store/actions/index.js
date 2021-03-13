import ADD from "../actionTypes";
import SUBTRACT from "../actionTypes";
import RESET from "../actionTypes";

import React from "react";

export const addNumber = () => ({
  type: ADD,
  payload: {
    test,
  },
});

export const subtractNumber = () => ({
  type: SUBTRACT,
  payload: {
    test,
  },
});

export const resetNumber = () => ({
  type: RESET,
  payload: {
    test,
  },
});
