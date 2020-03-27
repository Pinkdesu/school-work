import React, { useContext } from "react";
import FormInput from "../form-input/form-input";
import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  border: 1px solid black;
`;

const Table = ({ name, data, deleteQuery, saveQuery }) => {
  const handleDeleteClick = id => {
    //deleteQuery(id);
  };

  const handleSaveClick = id => {
    //saveQuery(id);
  };

  return (
    <TableWrapper>
      <tbody>
        {data.map((client, index) => (
          <tr key={index}>
            {Object.entries(client).map((entries, i) => {
              if (i === 0) return <td key={entries[0]}>{entries[1]}</td>;
              return (
                <td key={entries[0]}>
                  <FormInput
                    name={`${name}-${entries[0]}-${index}`}
                    defaultValue={entries[1]}
                    label=""
                    type="text"
                  />
                </td>
              );
            })}
            <td>
              <button
                onClick={() => handleDeleteClick(Object.values(client)[0])}
              >
                Удалить
              </button>
            </td>
            <td>
              <button onClick={() => handleSaveClick(Object.values(client)[0])}>
                Сохранить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
