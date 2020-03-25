import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContextApp } from "../../reducers/reducer.jsx";
import MainForm from "../main-form/main-form";
import FormInput from "../form-input/form-input";

const FormSelect = styled.select.attrs(props => ({
  multiple: props.multiple
}))`
  width: 200px;
  max-height: 120px;
  overflow-y: auto;
`;

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

const MainLab2 = () => {
  const { state } = useContext(ContextApp);

  return (
    <>
      <MainForm legend="Создать заявку">
        <FormInput
          type="text"
          defaultValue=""
          name="clientName"
          label="Введите имя клиента"
        />
        <FormInput
          type="text"
          defaultValue=""
          name="clientName"
          label="Введите контактный телефон"
        />
        <Item>
          <label>Выбирите услуги:</label>
          <FormSelect multiple={true}>
            <option>11</option>
            <option>22</option>
          </FormSelect>
        </Item>
        <button>Создать</button>
      </MainForm>
      <MainForm legend="Редактор заявок"></MainForm>
      <MainForm legend="Добавить услугу"></MainForm>
      <MainForm legend="Редактор услуг"></MainForm>
      <MainForm legend="Редактор пользователей"></MainForm>
    </>
  );
};

export default MainLab2;
