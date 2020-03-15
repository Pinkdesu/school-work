import React from "react";
import * as types from "../constants.js";

export const ContextApp = React.createContext();

export const initialState = {
  task1_number: "0",
  task2_a: "0",
  task2_b: "0",
  task2_c: "0",
  task3_date: "",
  task4_number: "1",
  task5_number: "1"
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
    case types.SET_TASK3_DATE:
      return {
        ...state,
        task3_date: payload["value"]
      };
    case types.SET_TASK4_NUMBER:
      return {
        ...state,
        task4_number: payload["value"]
      };
    case types.SET_TASK5_NUMBER:
      return {
        ...state,
        task5_number: payload["value"]
      };
    default:
      return state;
  }
};
