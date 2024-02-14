import React from "react";
import "./styles.css";

const Input = ({ placeHolder, type = "text", id, required = false, name, onChange ,onFocus, onBlur, value, label, active}) => {


 const inputClass = `inputContainer ${active ? "active" : ""}`
  return (
    <div className={inputClass}>
      <input placeholder={placeHolder} 
      name={name}
      id={id} 
      type={type}
      required={required} 
      onFocus={onFocus} 
      onBlur={onBlur} 
      onChange={onChange}
      value={value} />
      <label htmlFor={id}>{label}</label>
     
    </div>
  );
};

export default Input;
