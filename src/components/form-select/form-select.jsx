import React, { useState, useContext, useEffect } from "react";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE } from "../../constants";
import styled from "styled-components";

const FormSelectWrapper = styled.select.attrs(props => ({
  multiple: props.multiple
}))`
  width: 200px;
  max-height: 150px;
  overflow-y: auto;
`;

const FormSelect = ({ multiple, defaultValue, name, data }) => {
  const [value, setValue] = useState(defaultValue);
  const { dispatch } = useContext(ContextApp);

  const handleSelectChange = ({ target: { value, options } }) => {
    if (multiple) {
      let currents = [];
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          currents.push(options[i].value);
        }
      }
      setValue(currents);
      dispatch({
        type: SET_VALUE,
        payload: {
          [name]: currents
        }
      });
    } else {
      setValue(+value);
      dispatch({
        type: SET_VALUE,
        payload: {
          [name]: +value
        }
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: SET_VALUE,
      payload: {
        [name]: defaultValue
      }
    });
  }, [dispatch]);

  return (
    <FormSelectWrapper
      value={value}
      multiple={multiple}
      onChange={handleSelectChange}
    >
      {data.map(item => (
        <option key={item.id} value={item.id}>
          {item.price === undefined
            ? item.name
            : `${item.name} - ${item.price}`}
        </option>
      ))}
    </FormSelectWrapper>
  );
};

export default React.memo(FormSelect);
