import React from "react";
import styles from "./styles.module.css";

function FormInput({ name, onChange, value }) {
  return (
   
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        className={styles.formInput}
      />
  
  );
}

export default FormInput;
