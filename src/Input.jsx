import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  padding: 10px;
  width: 100%;
  input{
    font-size:20px;
    border: 1px solid #D3D3D3;
    text-align: center;
    width: 800px;
    box-sizing: border-box;
    background-color: #FAFAFA;
    @media only screen and (max-width:1100px){
      font-size:15px;
      width: 200px;
  }
}

`;

const Input = ({ label, type, value, onChange, ...props }) => (
  <StyledInput>
    <label>{label}</label>
    <br></br>
    <input type={type} value={value} onChange={onChange} {...props} />
  </StyledInput>
);

export default Input;
