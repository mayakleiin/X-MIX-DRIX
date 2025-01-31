import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import GameBoard from "./components/GameBoard";
import PlayAgain from "./components/PlayAgain";
import "./App.css";

const App: React.FC = () => {
  const [board, setBoard] = useState<(null | "X" | "O")[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<"X" | "O" | "Tie" | null>(null);
  const [winningSquares, setWinningSquares] = useState<number[] | null>(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningSquares(null);
  };

  return (
    <div className="app">
      <Header />
      <StatusBar currentTurn={isXNext ? "X" : "O"} winner={winner} />
      <GameBoard
        board={board}
        isXNext={isXNext}
        setBoard={setBoard}
        setIsXNext={setIsXNext}
        setWinner={setWinner}
        setWinningSquares={setWinningSquares}
        winningSquares={winningSquares}
      />
      {winner && <PlayAgain onClick={resetGame} />}
    </div>
  );
};

export default App;
