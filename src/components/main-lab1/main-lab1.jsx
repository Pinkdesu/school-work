import React from "react";
import MainContentItem from "../main-content-item/main-content-item.jsx";
import FormInput from "../form-input/form-input.jsx";
import axios from "axios";
import { URL_LAB1 } from "../../constants";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  width: 40%;
  min-width: 500px;
  padding: 40px 20px;
  margin-top: 100px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const MainLab1 = () => {
  const gettingTask1Data = ({ task1_number }) =>
    axios({
      method: "get",
      url: `${URL_LAB1}/number/${task1_number}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask2Data = ({ task2_a, task2_b, task2_c }) =>
    axios({
      method: "get",
      url: `${URL_LAB1}/equation?a=${task2_a}&b=${task2_b}&c=${task2_c}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask3Data = ({ task3_date }) =>
    axios({
      method: "get",
      url: `${URL_LAB1}/day?date=${task3_date}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask4Data = ({ task4_number }) =>
    axios({
      method: "get",
      url: `${URL_LAB1}/fib/${task4_number}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  const gettingTask5Data = ({ task5_number }) =>
    axios({
      method: "get",
      url: `${URL_LAB1}/regions/${task5_number}`,
      responseType: "text"
    })
      .then(responce => responce.data)
      .catch(error => alert(error));

  return (
    <MainContent>
      <MainContentItem
        legend="Задание 1. Вернуть число прописью."
        fetchingData={gettingTask1Data}
        buttonText="Получить"
      >
        <FormInput
          defaultValue={0}
          name="task1_number"
          type="number"
          label="Введите число:"
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 2. Уравнение вида: a*x^2+b*x+c=0."
        fetchingData={gettingTask2Data}
        buttonText="Получить"
      >
        <FormInput
          defaultValue={0}
          name="task2_a"
          type="number"
          label="Введите a:"
        />
        <FormInput
          defaultValue={0}
          name="task2_b"
          type="number"
          label="Введите b:"
        />
        <FormInput
          defaultValue={0}
          name="task2_c"
          type="number"
          label="Введите c:"
        />
      </MainContentItem>
      <MainContentItem
        legend="Задание 3. Вернуть день недели."
        fetchingData={gettingTask3Data}
        buttonText="Получить"
      >
        <FormInput
          defaultValue=""
          name="task3_date"
          type="date"
          label="Выберите дату:"
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 4. Вернуть число Фибоначчи."
        fetchingData={gettingTask4Data}
        buttonText="Получить"
      >
        <FormInput
          defaultValue={1}
          name="task4_number"
          type="number"
          label="Выберите дату:"
        />
      </MainContentItem>

      <MainContentItem
        legend="Задание 5. Вернуть название региона."
        fetchingData={gettingTask5Data}
        buttonText="Получить"
      >
        <FormInput
          defaultValue={1}
          name="task5_number"
          type="number"
          label="Введите номер региона:"
        />
      </MainContentItem>
    </MainContent>
  );
};

export default MainLab1;
