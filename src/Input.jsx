import React from "react";

//Use 
//<Input label="name:" type="text" etc /> 
const Input = ({ label, type, id, value, onChange, ...props }) => {
  return (
    <label>
      {label}
      < input type={type} id={id} value={value} onChange={onChange} {...props} />
    </label>
  )
};

export default Input;
