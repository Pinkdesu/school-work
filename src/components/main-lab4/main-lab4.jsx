import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE, URL_LAB4 } from "../../constants";

const MainContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  min-width: 800px;
  padding: 40px 20px;
  margin-top: 100px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainLab4 = () => {
  const { state, dispatch } = useContext(ContextApp);

  const getResponce = async () => axios.get(`${URL_LAB4}/responce`);

  const handleClick = () => {
    getResponce()
      .then((responce) =>
        dispatch({
          type: SET_VALUE,
          payload: {
            server_responce: responce.data,
          },
        })
      )
      .catch((error) => alert(error));
  };
  console.log(state["server_responce"]);
  return (
    <MainContent>
      <label>Ответ: {state["server_responce"].result}</label>
      <button
        style={{ width: "100px", marginTop: "20px" }}
        onClick={handleClick}
      >
        Получить
      </button>
    </MainContent>
  );
};

export default MainLab4;
