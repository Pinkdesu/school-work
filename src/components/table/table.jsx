import React from "react";
import FormInput from "../form-input/form-input";
import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  border: 1px solid black;
`;

const Table = ({ name, data, changeData, deleteData }) => {
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
              {Object.entries(item).map((entries, i) => {
                if (i === 0) return <td key={entries[0]}>{entries[1]}</td>;
                return (
                  <td key={entries[0]}>
                    <FormInput
                      name={`${name}-${entries[0]}-${id}`}
                      defaultValue={entries[1]}
                      label=""
                      type="text"
                    />
                  </td>
                );
              })}
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

export default Table;
