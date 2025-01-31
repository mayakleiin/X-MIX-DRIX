interface PlayAgainProps {
  onClick: () => void;
}

const PlayAgain: React.FC<PlayAgainProps> = ({ onClick }) => {
  return (
    <button className="btn custom-btn mt-3" onClick={onClick}>
      Play Again
    </button>
  );
};

export default PlayAgain;
