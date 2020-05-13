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
  server_responce: "",
  applications: [],
  clients: [],
  services: [],
  text: {},
};

export const indexReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_VALUE:
      return {
        ...state,
        ...payload,
      };
    case types.ADD_NEW_QUESTION: {
      const newText = { ...state.text };
      newText.questions.push({ ...payload });
      return { ...state, text: newText };
    }
    case types.CHANGE_TEXT_NAME: {
      const newText = { ...state.text };
      newText.name = payload.name;
      return { ...state, text: newText };
    }
    default:
      return state;
  }
};
