import React from "react";
import Square from "./Square";

interface GameBoardProps {
  board: (null | "X" | "O")[];
  isXNext: boolean;
  setBoard: React.Dispatch<React.SetStateAction<(null | "X" | "O")[]>>;
  setIsXNext: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<"X" | "O" | "Tie" | null>>;
  setWinningSquares: React.Dispatch<React.SetStateAction<number[] | null>>;
  winningSquares: number[] | null;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  isXNext,
  setBoard,
  setIsXNext,
  setWinner,
  setWinningSquares,
  winningSquares,
}) => {
  const handleClick = (index: number) => {
    if (board[index] !== null || winningSquares) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const winningInfo = checkWinner(newBoard);
    if (winningInfo) {
      setWinner(winningInfo.winner);
      setWinningSquares(winningInfo.line);
      return;
    }

    if (newBoard.every((cell) => cell !== null)) {
      setWinner("Tie");
      return;
    }

    setIsXNext(!isXNext);
  };

  const checkWinner = (
    board: (null | "X" | "O")[]
  ): { winner: "X" | "O"; line: number[] } | null => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a] as "X" | "O", line: [a, b, c] };
      }
    }
    return null;
  };

  return (
    <div className="game-board">
      {board.map((value, index) => (
        <Square
          key={index}
          state={value}
          onClick={() => handleClick(index)}
          isWinningSquare={winningSquares?.includes(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
