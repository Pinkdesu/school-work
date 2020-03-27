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

  const addClient = async () =>
    await axios.post(`${URL_LAB2}/clients`, {
      name: state["new-client-name"],
      phone: state["new-client-phone"]
    });

  const getClients = async () => axios.get(`${URL_LAB2}/clients`);

  const changeClient = async id =>
    await axios.put(`${URL_LAB2}/clients/${id}`, {
      name: state[`clients-table-name-${id}`],
      phone: state[`clients-table-phone-${id}`]
    });

  const deleteClient = async id =>
    await axios.delete(`${URL_LAB2}/clients/${id}`);

  const addService = async () =>
    await axios.post(`${URL_LAB2}/services`, {
      name: state["new-service-name"],
      price: state["new-service-price"]
    });

  const getServices = async () => await axios.get(`${URL_LAB2}/services`);

  const changeService = async id =>
    await axios.put(`${URL_LAB2}/services/${id}`, {
      name: state[`services-table-name-${id}`],
      price: state[`services-table-price-${id}`]
    });

  const deleteService = async id =>
    await axios.delete(`${URL_LAB2}/services/${id}`);

  const getApplications = async () =>
    await axios.get(`${URL_LAB2}/applications`);

  const addApplications = async () =>
    await axios.post(`${URL_LAB2}/applications`, {
      client_id: clientId,
      services: serviceId
    });

  const handleApplicationClick = () => {
    addApplications().catch(error => alert(error));
  };

  const handleClientClick = () => {
    addClient().catch(error => alert(error));
  };

  const handleServiceClick = () => {
    addService().catch(error => alert(error));
  };

  const handleClientChange = ({ target: { value } }) => {
    setClientId(+value);
  };

  const handleServiceChange = ({ target: { value } }) => {
    setSetviceId(prevState => [...prevState, +value]);
  };

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
        <button onClick={handleApplicationClick}>Создать</button>
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
          name="new-service-price"
          label="Стоимость услуги:"
          type="number"
          defaultValue={0}
        />
        <button onClick={handleServiceClick}>Добавить</button>
      </MainForm>
      <MainForm legend="Редактор услуг">
        <Table
          name="services-table"
          data={state.services}
          changeData={changeService}
          deleteData={deleteService}
        />
      </MainForm>
      <MainForm legend="Добавить пользователя">
        <FormInput
          name="new-client-name"
          label="ФИО клиента:"
          type="text"
          defaultValue=""
        />
        <FormInput
          name="new-client-phone"
          label="Контактный телефон:"
          type="text"
          defaultValue="89324888155"
        />
        <button onClick={handleClientClick}>Добавить</button>
      </MainForm>
      <MainForm legend="Редактор пользователей">
        <Table
          name="clients-table"
          data={state.clients}
          changeData={changeClient}
          deleteData={deleteClient}
        />
      </MainForm>
    </>
  );
};

export default MainLab2;
