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
  task5_number: "1",
  applications: [],
  clients: [],
  services: []
};

export const indexReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_VALUE:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
