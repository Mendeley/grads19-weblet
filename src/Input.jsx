import React from "react";

//Use
//<Input label="name:" type="text" etc />
const Input = ({ label, type, value, onChange, ...props }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} {...props} />
  </div>
);

export default Input;
