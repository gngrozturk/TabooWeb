import { useEffect } from "react";
import { useScore } from "../context/ScoreContext";
import { useTime } from "../context/TimeContext";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";

function Board({ children }) {
  const { time, setTime, timerOn, setTimerOn } = useTime();
  const {
    scoreA,
    setScoreA,
    scoreB,
    setScoreB,
    currentScore,
    setCurrentScore,
    currentTeam,
    setCurrentTeam,
    pass,
    setPass,
  } = useScore();

  const startTime = () => {
    setTimerOn(!timerOn);
  };

  const Correct = () => {
    setCurrentScore(currentScore + 1);
  };

  const Taboo = () => {
    setCurrentScore(currentScore - 1);
  };

  const Pass = () => {
    if (pass > 0) {
      setPass(pass - 1);
    }
  };

  useEffect(() => {
    let interval = null;

    if (timerOn && time >= 1) {
      interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setTimeout(() => {
        alert("Süre Doldu");
      }, 1000);
      if (currentTeam === "teamA") {
        setScoreA(scoreA + currentScore);
        setCurrentTeam("teamB");
      } else {
        setScoreB(scoreB + currentScore);
        setCurrentTeam("teamA");
      }
      setTimeout(function () {
        setTimerOn(false);
        setCurrentScore(0);
        setPass(3);
        setTime(90);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerOn, time]);

  return (
    <div>
      <ScoreBoard text="A Takımı" score={scoreA} />
      <ScoreBoard text="B Takımı" score={scoreB} />
      <ScoreBoard text="Anlık Skor" score={currentScore} />
      <ScoreBoard text="Pas Hakkı" score={pass} />
      <ScoreBoard text="Kalan Süre" Class="board-time" score={time} />
      {children}

      {timerOn ? (
        <>
          <Button title="Pas" Class="btn-pass" Clicked={Pass} />{" "}
          <Button title="Tabu" Class="btn-taboo" Clicked={Taboo} />
          <Button title="Doğru" Class="btn-correct" Clicked={Correct} />
        </>
      ) : null}

      <br />
      <Button
        title={timerOn ? "Durdur" : "Başla"}
        Class="btn-time"
        Clicked={startTime}
      />
    </div>
  );
}

export default Board;
