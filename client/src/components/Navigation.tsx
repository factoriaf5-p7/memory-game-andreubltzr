import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3 items-center gap-6">
      <Link to="/">
        <h2 className="font-bold text-2xl mb-4">Home</h2>
      </Link>
      <Link to="/game">
        <h2 className="font-bold text-2xl mb-4">Game</h2>
      </Link>
      <Link to="/settings">
        <h2 className="font-bold text-2xl mb-4">Settings</h2>
      </Link>
    </div>
  );
};
