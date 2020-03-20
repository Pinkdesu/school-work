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
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputsBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 75%;
`;

const AnswerBox = styled.span``;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const Button = styled.button`
  padding: 5px 10px;
  text-align: center;
`;

const MainContentItem = ({ children, legend, fetchingData, name }) => {
  const [answerValue, setAnswerValue] = useState("");
  const { state } = useContext(ContextApp);

  const handleSubmit = async e => {
    e.preventDefault();
    const answer = await fetchingData(state);
    setAnswerValue(answer);
  };

  return (
    <MainContentForm onSubmit={handleSubmit}>
      <FormFieldset>
        <FormFieldsetLegend>{legend}</FormFieldsetLegend>
        <FormContent>
          <InputsBox>
            {children}
            <AnswerBox>Ответ: {answerValue}</AnswerBox>
          </InputsBox>
          <ButtonBox>
            <Button>Получить</Button>
          </ButtonBox>
        </FormContent>
      </FormFieldset>
    </MainContentForm>
  );
};

export default MainContentItem;
