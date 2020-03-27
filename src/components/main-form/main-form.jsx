import React, { useState, useContext } from "react";
import { ContextApp } from "../../reducers/reducer.jsx";
import styled from "styled-components";

const MainContentForm = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

const FormFieldset = styled.fieldset`
  padding: 10px;
  border: 1px solid #000;
`;

const FormFieldsetLegend = styled.legend`
  font-weight: bold;
  font-size: 16px;
  padding: 0 5px;
`;

const FormContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
`;

const MainForm = ({ children, legend }) => {
  const handleSubmit = e => {};

  return (
    <MainContentForm onSubmit={handleSubmit}>
      <FormFieldset>
        <FormFieldsetLegend>{legend}</FormFieldsetLegend>
        <FormContent>{children}</FormContent>
      </FormFieldset>
    </MainContentForm>
  );
};

export default MainForm;
