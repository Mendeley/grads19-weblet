import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  background: #322d38;
  color: white;
  border-color: #322d38;
  font-size: 16px;
  text-decoration: underline;
  padding: 0;
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
