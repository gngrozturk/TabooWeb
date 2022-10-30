import React from "react";
import styles from "./styles.module.css";

function ScoreBoard({ text, score, Class }) {
  return (
    <h4 className={`${styles.scoreItem} ${styles[Class]}`}>
      {text} : {score}
    </h4>
  );
}

export default ScoreBoard;
