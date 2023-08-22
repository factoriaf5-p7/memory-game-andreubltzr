export interface CardProps {
  name: string;
  img: string;
  isHidden: boolean;
  onClick: () => void;
}

export const Card = ({ name, img, isHidden, onClick }: CardProps) => {
  return (
    <div
      className={`${
        isHidden ? 'bg-gray-700' : ''
      } w-32 h-32 flex flex-col items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      {!isHidden && (
        <>
          <img src={img} alt={name} />
          <p>{name}</p>
        </>
      )}
    </div>
  );
};
