import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  padding: 10px;
`;

//Use
//<Input label="name:" type="text" etc />
const Input = ({ label, type, value, onChange, ...props }) => (
  <StyledInput>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} {...props} />
  </StyledInput>
);

export default Input;
