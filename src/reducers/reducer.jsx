import React from "react";
import * as types from "../constants.js";
export const ContextApp = React.createContext();

export const initialState = {
  value: "0"
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
