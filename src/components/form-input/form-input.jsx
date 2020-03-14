import React, { useState } from "react";
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
  width: 80px;
  margin-left: 10px;
`;

const FormInput = ({ label, id, type }) => {
  const [value, setValue] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <InputLabel>
      {label}
      <Input name={name} type={type} onChange={handleChange} value={value} />
    </InputLabel>
  );
};

export default FormInput;
