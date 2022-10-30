import React from "react";
import styles from "./styles.module.css";

function Button({ title, Clicked, Class }) {
  return (
    <button className={`${styles.btn} ${styles[Class]}`} onClick={Clicked}>
      {title}
    </button>
  );
}

export default Button;
