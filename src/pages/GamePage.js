import React from "react";
import Board from "../components/Board";
import Words from "../components/Words";
import styles from "./styles.module.css";

function GamePage() {
  return (
    <div className={styles.container}>
      <Board>
        <Words />
      </Board>
    </div>
  );
}

export default GamePage;
