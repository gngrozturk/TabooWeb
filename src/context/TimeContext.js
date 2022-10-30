import { useContext } from "react";
import { createContext, useState } from "react";

const TimeConext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(5);
  const [timerOn, setTimerOn] = useState(false);

  const values = {
    time,
    setTime,
    timerOn,
    setTimerOn,
  };

  return <TimeConext.Provider value={values}>{children}</TimeConext.Provider>;
};

export const useTime = () => useContext(TimeConext);
