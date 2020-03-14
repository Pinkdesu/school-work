import React from "react";
import MainContentItem from "../main-content-item/main-content-item.jsx";
import FormInput from "../form-input/form-input.jsx";
import axios from "axios";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 40%;
  min-width: 500px;
  padding: 40px 20px;
  margin-top: 200px;
  border-radius: 5px;
  background-color: #fff;
  height: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainLab1 = () => {
  const gettingTask1Answer = async () => {};

  return (
    <MainContent>
      <MainContentItem legend="Задани 1">
        <FormInput
          name="task1"
          type="number"
          label="Чтобы получить число прописью введите его:"
        />
      </MainContentItem>
    </MainContent>
  );
};

export default MainLab1;
