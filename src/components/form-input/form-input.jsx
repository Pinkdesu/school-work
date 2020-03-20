import React, { useState, useContext } from "react";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE } from "../../constants.js";
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
  value: props.value
}))`
  margin-left: 10px;
  width: 130px;
`;

const FormInput = ({ defaultValue, label, name, type }) => {
  const [value, setValue] = useState(defaultValue);
  const { dispatch } = useContext(ContextApp);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    dispatch({
      type: SET_VALUE,
      payload: {
        [name]: value
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
