import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { data } from '../data/data';
import { Modal } from '../components/Modal';
import { GameInfo } from '../components/GameInfo';
import axios from 'axios';

interface CardData {
  name: string;
  img: string;
  isHidden: boolean;
}

const shuffleArray = (array: CardData[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Game = () => {
  const [cards, setCards] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [shuffledData, setShuffledData] = useState<CardData[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [guessedPairs, setGuessedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get(
        `https://memory-game-andreubltzr-production.up.railway.app/api/cards?theme=${localStorage.getItem(
          'theme'
        )}`
      );
      const cards = res.data;
      cards.map((card) => ({ ...card, isHidden: false }));
      setShuffledData(cards);
      setCards(cards);
    };
    getCards();
  }, []);

  useEffect(() => {
    if (guessedPairs === data.length / 2) {
      setShowModal(true);
    }
  }, [guessedPairs]);

  const startGame = () => {
    setIsGameStarted(true);
    const initialShuffledData = shuffleArray(
      cards.map((card) => ({ ...card, isHidden: true }))
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
      <GameInfo clickCount={clickCount} guessedPairs={guessedPairs} />
      <div className="grid grid-cols-6 gap-4 place-items-center">
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
          className={`text-xl py-2 px-6 border border-black ${
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
