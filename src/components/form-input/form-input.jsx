import React, { useState, useContext } from "react";
import { ContextApp } from "../../reducers/reducer.jsx";
import styled from "styled-components";

const InputLabel = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value,
  min: -999,
  max: 999
}))`
  width: 80px;
  margin-left: 10px;
`;

const FormInput = ({ label, name, type, actionType }) => {
  const [value, setValue] = useState(0);
  const { dispatch } = useContext(ContextApp);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    dispatch({
      type: actionType,
      payload: {
        value
      }
    });
  };

  return (
    <InputLabel>
      {label}
      <Input name={name} type={type} onChange={handleChange} value={value} />
    </InputLabel>
  );
};

export default FormInput;
