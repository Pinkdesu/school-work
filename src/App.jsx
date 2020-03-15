import React, { useReducer } from "react";
import { ContextApp, initialState, indexReducer } from "./reducers/reducer.jsx";
import MainLab1 from "./components/main-lab1/main-lab1.jsx";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [state, dispatch] = useReducer(indexReducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Main>
        <MainLab1 />
      </Main>
    </ContextApp.Provider>
  );
};

export default App;
