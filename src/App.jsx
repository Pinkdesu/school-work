import React from "react";
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
  return (
    <Main>
      <MainLab1 />
    </Main>
  );
};

export default App;
