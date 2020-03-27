import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE, URL_LAB2 } from "../../constants";
import MainForm from "../main-form/main-form";
import Table from "../table/table";
import FormInput from "../form-input/form-input.jsx";

const FormSelect = styled.select.attrs(props => ({
  multiple: props.multiple
}))`
  width: 300px;
  max-height: 150px;
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
  const { dispatch } = useContext(ContextApp);
  const [clientId, setClientId] = useState(0);
  const [serviceId, setSetviceId] = useState([]);
  console.dir(state);
  const handleClientChange = ({ target: { value } }) => {
    setClientId(+value);
  };

  const handleServiceChange = ({ target: { value } }) => {
    setSetviceId(prevState => [...prevState, +value]);
  };

  const getClients = async () => await axios.get(`${URL_LAB2}/clients`);

  const getServices = async () => await axios.get(`${URL_LAB2}/services`);

  const getApplications = async () => axios.get(`${URL_LAB2}/applications`);

  useEffect(() => {
    try {
      getClients().then(clients =>
        dispatch({
          type: SET_VALUE,
          payload: {
            clients: clients.data
          }
        })
      );
      getServices().then(services =>
        dispatch({
          type: SET_VALUE,
          payload: {
            services: services.data
          }
        })
      );
    } catch (error) {
      alert(error);
    }
  }, [dispatch]);

  return (
    <>
      <MainForm legend="Создать заявку">
        <Item>
          <label>Выбирите клиента:</label>
          <FormSelect
            value={clientId}
            multiple={false}
            onChange={handleClientChange}
          >
            <option value={0}></option>
            {state.clients.map(client => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </FormSelect>
        </Item>
        <Item>
          <label>Выбирите услуги:</label>
          <FormSelect
            value={serviceId}
            multiple={true}
            onChange={handleServiceChange}
          >
            {state.services.map(service => (
              <option key={service.id} value={service.id}>
                {`${service.name} - ${service.price}руб.`}
              </option>
            ))}
          </FormSelect>
        </Item>
        <button>Создать</button>
      </MainForm>
      <MainForm legend="Редактор заявок">
        <Table data={[]} />
      </MainForm>
      <MainForm legend="Добавить услугу">
        <FormInput
          name="new-service-name"
          label="Название услуги:"
          type="text"
          defaultValue=""
        />
        <FormInput
          name="naw-service-price"
          label="Стоимость услуги:"
          type="number"
          defaultValue={0}
        />
        <button>Добавить</button>
      </MainForm>
      <MainForm legend="Редактор услуг">
        <Table name="service-table" data={state.services} />
      </MainForm>
      <MainForm legend="Добавить пользователя">
        <FormInput
          name="new-client-name"
          label="ФИО клиента:"
          type="text"
          defaultValue=""
        />
        <FormInput
          name="naw-client-phone"
          label="Контактный телефон:"
          type="text"
          defaultValue="89324888155"
        />
        <button>Добавить</button>
      </MainForm>
      <MainForm legend="Редактор пользователей">
        <Table name="clients-table" data={state.clients} />
      </MainForm>
    </>
  );
};

export default MainLab2;
