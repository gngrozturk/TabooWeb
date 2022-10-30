import React from "react";
import Board from "./Board";
import Words from "./Words";
import styles from "./styles.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <Board>
        <Words />
      </Board>
    </div>
  );
}

export default Container;
