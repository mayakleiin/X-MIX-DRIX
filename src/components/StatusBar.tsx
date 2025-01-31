interface StatusBarProps {
  currentTurn: "X" | "O";
  winner: "X" | "O" | "Tie" | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ currentTurn, winner }) => {
  return (
    <div className="status-bar">
      {winner === "Tie"
        ? "It's a Tie!"
        : winner
        ? `Winner: ${winner}`
        : `Turn: ${currentTurn}`}
    </div>
  );
};

export default StatusBar;
