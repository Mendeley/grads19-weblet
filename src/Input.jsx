import React from "react";

const Input = ({ type, ...props }) => {
  return <input type={type} {...props} />;
};

export default Input;
