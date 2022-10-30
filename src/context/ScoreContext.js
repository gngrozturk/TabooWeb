import { useContext } from "react";
import { createContext, useState } from "react";

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentTeam, setCurrentTeam] = useState("teamA");
  const [pass, setPass] = useState(3);

  const values = {
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
  };

  return (
    <ScoreContext.Provider value={values}>{children}</ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
