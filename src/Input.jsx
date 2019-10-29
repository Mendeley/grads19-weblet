import React from "react";

//Use 
//<Input label="name:" type="text" etc /> 
const Input = ({ label, type, id, value, onChange, ...props }) => (
    <div>
      <label>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} {...props} />
    </div>
  );

export default Input;
