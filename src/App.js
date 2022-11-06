import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ScoreProvider } from "./context/ScoreContext";
import { TimeProvider } from "./context/TimeContext";
import { WordsProvider } from "./context/WordsContext";
import GamePage from "./pages/GamePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <TimeProvider>
          <WordsProvider>
            <Routes>
              <Route path="/game" element={<GamePage />} />
              <Route path="/" element={<SettingsPage />} />
            </Routes>
          </WordsProvider>
        </TimeProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
