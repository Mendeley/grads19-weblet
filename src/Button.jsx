import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  background: lightgrey;
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
