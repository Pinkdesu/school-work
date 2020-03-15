import React from "react";
import * as types from "../../constants.js";
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
  margin-top: 50px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainLab1 = () => {
  const gettingTask1Data = value =>
    axios({
      method: "get",
      url: `http://localhost:9000/number/${value}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask2Data = (a, b, c) =>
    axios({
      method: "get",
      url: `http://localhost:9000/equation?a=${a}&b=${b}&c=${c}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask3Data = date =>
    axios({
      method: "get",
      url: `http://localhost:9000/day?date=${date}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask4Data = number =>
    axios({
      method: "get",
      url: `http://localhost:9000/fib/${number}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask5Data = region =>
    axios({
      method: "get",
      url: `http://localhost:9000/regions/${region}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  return (
    <MainContent>
      <MainContentItem
        legend="Задание 1. Вернуть число прописью."
        fetchingData={gettingTask1Data}
        name="task1"
      >
        <FormInput
          defaultValue={0}
          name="task1-number"
          type="number"
          label="Введите число:"
          actionType={types.SET_TASK1_VALUE}
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 2. Уравнение вида: a*x^2+b*x+c=0."
        fetchingData={gettingTask2Data}
        name="task2"
      >
        <FormInput
          defaultValue={0}
          name="task2-a"
          type="number"
          label="Введите a:"
          actionType={types.SET_TASK2_A}
        />
        <FormInput
          defaultValue={0}
          name="task2-b"
          type="number"
          label="Введите b:"
          actionType={types.SET_TASK2_B}
        />
        <FormInput
          defaultValue={0}
          name="task2-c"
          type="number"
          label="Введите c:"
          actionType={types.SET_TASK2_C}
        />
      </MainContentItem>
      <MainContentItem
        legend="Задание 3. Вернуть день недели."
        fetchingData={gettingTask3Data}
        name="task3"
      >
        <FormInput
          defaultValue=""
          name="task3-date"
          type="date"
          label="Выберите дату:"
          actionType={types.SET_TASK3_DATE}
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 4. Вернуть число Фибоначчи."
        fetchingData={gettingTask4Data}
        name="task4"
      >
        <FormInput
          defaultValue={1}
          name="task4-number"
          type="number"
          label="Выберите дату:"
          actionType={types.SET_TASK4_NUMBER}
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 5. Вернуть название региона."
        fetchingData={gettingTask5Data}
        name="task5"
      >
        <FormInput
          defaultValue={1}
          name="task5-number"
          type="number"
          label="Введите номер региона:"
          actionType={types.SET_TASK5_NUMBER}
        />
      </MainContentItem>
    </MainContent>
  );
};

export default MainLab1;
