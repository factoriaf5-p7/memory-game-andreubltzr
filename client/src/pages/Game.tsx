import { useState } from 'react';
import { Card } from '../components/Card';
import { data } from '../data/data';

interface CardData {
  name: string;
  img: string;
  isHidden: boolean;
}

const shuffleArray = (array: CardData[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [shuffledData, setShuffledData] = useState<CardData[]>(
    data.map((card) => ({ ...card, isHidden: false }))
  );

  const handleStartClick = () => {
    setIsGameStarted(true);
    const initialShuffledData = shuffleArray(
      data.map((card) => ({ ...card, isHidden: true }))
    );
    setShuffledData(initialShuffledData);
  };

  const handleCardClick = (i: number) => {
    if (!isGameStarted) return;
    const updatedData = [...shuffledData];
    updatedData[i].isHidden = !updatedData[i].isHidden;
    setShuffledData(updatedData);
  };

  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {shuffledData.map((card, i) => (
          <Card
            key={i}
            name={card.name}
            img={card.img}
            isHidden={card.isHidden}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </div>
      <div className="m-auto w-10 pt-5">
        <button
          className={`bg-slate-400 px-4 ${isGameStarted ? 'hidden' : ''}`}
          onClick={handleStartClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};
