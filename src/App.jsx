import React, { useReducer } from "react";
import Header from "./components/header/header.jsx";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { ContextApp, initialState, indexReducer } from "./reducers/reducer.jsx";
import MainLab2 from "./components/main-lab2/main-lab2.jsx";
import MainLab1 from "./components/main-lab1/main-lab1.jsx";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DefaultText = styled.p`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const App = () => {
  const [state, dispatch] = useReducer(indexReducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <DefaultText>
              Для просмотра заданий используйте навигацию
            </DefaultText>
          </Route>
          <Route exact path="/lab1">
            <MainLab1 />
          </Route>
          <Route exact path="/lab2">
            <MainLab2 />
          </Route>
        </Switch>
      </Main>
    </ContextApp.Provider>
  );
};

export default App;
