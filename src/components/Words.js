import { useEffect } from "react";
import { useWords } from "../context/WordsContext";
import { useScore } from "../context/ScoreContext";
import { useTime } from "../context/TimeContext";
import styles from "./styles.module.css";

function Words() {
  const { words, index, setIndex } = useWords();
  const { currentScore, pass } = useScore();
  const { timerOn } = useTime();

  useEffect(() => {
    setIndex(Math.floor(Math.random() * words.length));
  }, [currentScore, pass]);

  return (
    <div>
      {timerOn ? (
        <>
          <div className={styles.wordsContainer}>
            <p className={styles.target}>{words[index].target}</p>
            {words[index].taboos.map((taboo, i) => (
              <p className={styles.taboos} key={i}>
                {taboo}
              </p>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Words;
