interface GameInfoProps {
  clickCount: number;
  guessedPairs: number;
}

export const GameInfo = ({ clickCount, guessedPairs }: GameInfoProps) => {
  return (
    <div className="m-2 mb-4 flex justify-between">
      <div>
        <p>
          Click Count: <span className="font-bold">{clickCount}</span>
        </p>
        <p>
          Guessed Pairs: <span className="font-bold">{guessedPairs}</span>
        </p>
      </div>
      <div className="text-right">
        <p>
          Theme:{' '}
          <span className="font-bold">{localStorage.getItem('theme')}</span>
        </p>
        <p>
          Difficulty:{' '}
          <span className="font-bold">
            {localStorage.getItem('difficulty')}
          </span>
        </p>
      </div>
    </div>
  );
};
