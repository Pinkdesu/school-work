import React, { useContext } from "react";
import { ContextApp } from "../../reducers/reducer.jsx";
import FormInput from "../form-input/form-input";
import FormSelect from "../form-select/form-select";
import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  border: 1px solid black;
`;

const ApplicationsTable = ({ name, data, changeData, deleteData }) => {
  const { state } = useContext(ContextApp);

  const handleDeleteClick = id => {
    deleteData(id).catch(error => alert(error));
  };

  const handleSaveClick = id => {
    changeData(id).catch(error => alert(error));
  };

  return (
    <TableWrapper>
      <tbody>
        {data.map((item, index) => {
          const id = item.id;

          return (
            <tr key={index}>
              <td>{id}</td>
              <td>
                <FormInput
                  name={`${name}-date-${id}`}
                  defaultValue={item.date.split("T")[0]}
                  label=""
                  type="date"
                />
              </td>
              <td>
                <FormSelect
                  data={state.clients}
                  defaultValue={item.clientId}
                  name={`${name}-clientId-${id}`}
                  multiple={false}
                />
              </td>
              <td>
                <FormSelect
                  data={state.services}
                  defaultValue={item.services}
                  name={`${name}-services-${id}`}
                  multiple={true}
                />
              </td>
              <td>
                {state.services.reduce((sum, current) => {
                  if (item.services.includes(current.id)) {
                    return sum + current.price;
                  } else return sum;
                }, 0)}
              </td>
              <td>
                <button onClick={() => handleDeleteClick(id)}>Удалить</button>
              </td>
              <td>
                <button onClick={() => handleSaveClick(id)}>Сохранить</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default ApplicationsTable;
