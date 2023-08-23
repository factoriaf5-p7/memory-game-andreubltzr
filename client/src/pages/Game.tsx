import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { data } from '../data/data';
import { Modal } from '../components/Modal';

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
  const [guessedPairs, setGuessedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const initialShuffledData = shuffleArray(
      data.map((card) => ({ ...card, isHidden: false }))
    );
    setShuffledData(initialShuffledData);
  }, []);

  useEffect(() => {
    if (guessedPairs === data.length / 2) {
      setShowModal(true);
    }
  }, [guessedPairs]);

  const startGame = () => {
    setIsGameStarted(true);
    const initialShuffledData = shuffleArray(
      data.map((card) => ({ ...card, isHidden: true }))
    );
    setShuffledData(initialShuffledData);
    setClickCount(0);
    setClickedCards([]);
    setGuessedPairs(0);
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
          setGuessedPairs(guessedPairs + 1);
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
      <div className="m-2">
        <div>Click Count: {clickCount}</div>
        <div>Guessed Pairs: {guessedPairs}</div>
      </div>
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
          className={`bg-slate-400 px-6 py-2 text-xl ${
            isGameStarted ? 'hidden' : ''
          }`}
          onClick={startGame}
        >
          Start
        </button>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};
