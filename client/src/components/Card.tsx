import { data } from '../data/data';

export const Card = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {data.map((card, i) => (
        <div key={i} className=" flex flex-col items-center justify-center">
          <img src={card.img} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
};
