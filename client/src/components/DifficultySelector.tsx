import { useState } from 'react';

export const DifficultySelector = () => {
  const selectedDifficulty = localStorage.getItem('difficulty') || 'easy';
  const difficultyArray = ['easy', 'medium', 'hard'];
  const [difficulty, setDifficulty] = useState(selectedDifficulty);

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    localStorage.setItem('difficulty', selectedDifficulty);
  };

  return (
    <div>
      <label htmlFor="themeSelector">Select Theme: </label>
      <select
        id="themeSelector"
        value={difficulty}
        onChange={handleDifficultyChange}
      >
        {difficultyArray.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
    </div>
  );
};
