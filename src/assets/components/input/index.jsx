import React from "react";
import "./styles.css";

const Input = ({ placeHolder, type = "text", id, required = false, name, onChange ,onFocus, onBlur, value, className}) => {



  return (
    <div className={className}>
      <input placeholder={placeHolder} 
      id={id} 
      type={type}
      required={required} 
      onFocus={onFocus} 
      onBlur={onBlur} 
      onChange={onChange}
      value={value} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default Input;
