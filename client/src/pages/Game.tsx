import { useEffect, useState } from 'react';
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
  const [shuffledData, setShuffledData] = useState<CardData[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const initialShuffledData = shuffleArray(
      data.map((card) => ({ ...card, isHidden: false }))
    );
    setShuffledData(initialShuffledData);
  }, []);

  const startGame = () => {
    setIsGameStarted(true);
    const initialShuffledData = shuffleArray(
      data.map((card) => ({ ...card, isHidden: true }))
    );
    setShuffledData(initialShuffledData);
    setClickCount(0);
    setClickedCards([]);
  };

  const handleCardClick = (i: number) => {
    if (!isGameStarted || clickedCards.length === 2) return;

    if (!clickedCards.includes(i)) {
      const updatedClickedCards = [...clickedCards, i];
      setClickedCards(updatedClickedCards);
      setClickCount(clickCount + 1);

      const updatedData = [...shuffledData];
      updatedData[i].isHidden = !updatedData[i].isHidden;
      setShuffledData(updatedData);

      if (updatedClickedCards.length === 2) {
        const [index1, index2] = updatedClickedCards;
        if (shuffledData[index1].name === shuffledData[index2].name) {
          setClickedCards([]);
        } else {
          setTimeout(() => {
            const updatedData = [...shuffledData];
            updatedData[index1].isHidden = true;
            updatedData[index2].isHidden = true;
            setShuffledData(updatedData);
            setClickedCards([]);
          }, 1000);
        }
      }
    }
  };

  return (
    <div>
      <div>Click Count: {clickCount}</div>
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
          onClick={startGame}
        >
          Start
        </button>
      </div>
    </div>
  );
};
