import React from "react";
import * as types from "../constants.js";

export const ContextApp = React.createContext();

export const initialState = {
  task1_number: "0",
  task2_a: "0",
  task2_b: "0",
  task2_c: "0"
};

export const indexReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_TASK1_VALUE:
      return {
        ...state,
        task1_number: payload["value"]
      };
    case types.SET_TASK2_A:
      return {
        ...state,
        task2_a: payload["value"]
      };
    case types.SET_TASK2_B:
      return {
        ...state,
        task2_b: payload["value"]
      };
    case types.SET_TASK2_C:
      return {
        ...state,
        task2_c: payload["value"]
      };
    default:
      return state;
  }
};
