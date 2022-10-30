import "./App.css";
import Container from "./components/Container";
import { ScoreProvider } from "./context/ScoreContext";
import { TimeProvider } from "./context/TimeContext";
import { WordsProvider } from "./context/WordsContext";

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <TimeProvider>
          <WordsProvider>
            <Container />
          </WordsProvider>
        </TimeProvider>
      </ScoreProvider>
    </div>
  );
}

export default App;
