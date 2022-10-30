import { useContext } from "react";
import { createContext, useState } from "react";
import { data } from "../data";

const WordsConext = createContext();

export const WordsProvider = ({ children }) => {
  const [words] = useState(data);
  const [index, setIndex] = useState(0);

  const values = {
    words,
    index,
    setIndex,
  };

  return <WordsConext.Provider value={values}>{children}</WordsConext.Provider>;
};

export const useWords = () => useContext(WordsConext);
