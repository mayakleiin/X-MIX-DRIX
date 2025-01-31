interface SquareProps {
  state: "X" | "O" | null;
  onClick: () => void;
  isWinningSquare?: boolean;
}

const Square: React.FC<SquareProps> = ({ state, onClick, isWinningSquare }) => {
  return (
    <button
      className={`square ${isWinningSquare ? "winning-square" : ""}`}
      onClick={onClick}
    >
      {state === "X" && <img src="/X.png" alt="X" />}
      {state === "O" && <img src="/O.png" alt="O" />}
    </button>
  );
};

export default Square;
