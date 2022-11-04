import { useEffect } from "react";
import { useWords } from "../context/WordsContext";
import { useScore } from "../context/ScoreContext";
import styles from "./styles.module.css";

function Words() {
  const { words, index, setIndex } = useWords();
  const { currentScore, pass } = useScore();

  useEffect(() => {
    setIndex(Math.floor(Math.random() * words.length));
  }, [currentScore, pass]);

  return (
    <div className={styles.wordsContainer}>
      <p className={styles.target}>{words[index].target}</p>
      {words[index].taboos.map((taboo, i) => (
        <p className={styles.taboos} key={i}>
          {taboo}
        </p>
      ))}
    </div>
  );
}

export default Words;
