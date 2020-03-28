import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE, URL_LAB2 } from "../../constants";
import MainForm from "../main-form/main-form";
import Table from "../table/table";
import FormInput from "../form-input/form-input.jsx";
import FormSelect from "../form-select/form-select";
import ApplicationsTable from "../applications-table/applications-table.jsx";

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;
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

const MainLab2 = () => {
  const { state, dispatch } = useContext(ContextApp);

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
      client_id: state["app-client"],
      services: state["app-services"]
    });

  const handleApplicationClick = () => {
    if (state["app-services"].length !== 0 && state["app-client"] !== 0) {
      addApplications().catch(error => alert(error));
    } else alert("Заполните все поля!");
  };

  const handleClientClick = () => {
    addClient().catch(error => alert(error));
  };

  const handleServiceClick = () => {
    addService().catch(error => alert(error));
  };

  useEffect(() => {
    try {
      getApplications().then(applications =>
        dispatch({
          type: SET_VALUE,
          payload: {
            applications: applications.data
          }
        })
      );
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
    <MainContent>
      <MainForm legend="Создать заявку">
        <Item>
          <label>Выбирите клиента:</label>
          <FormSelect
            data={state.clients}
            multiple={false}
            defaultValue={1}
            name="app-client"
          />
        </Item>
        <Item>
          <label>Выбирите услуги:</label>
          <FormSelect
            data={state.services}
            defaultValue={[]}
            multiple={true}
            name="app-services"
          />
        </Item>
        <button onClick={handleApplicationClick}>Создать</button>
      </MainForm>
      <MainForm legend="Редактор заявок">
        <ApplicationsTable
          data={state.applications}
          name="app-table"
          changeData={() => {}}
          deleteData={() => {}}
        />
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
    </MainContent>
  );
};

export default MainLab2;
