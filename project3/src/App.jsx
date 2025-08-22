import { useState } from "react";
import "./App.css";
import StartGame from "./pages/StartGame";
import GameStarted from "./pages/GameStarted";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>  
      {isGameStarted ? (
        <GameStarted />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
