import { useState } from 'react';

export const ThemeSelector = () => {
  const selectedTheme = localStorage.getItem('theme') || 'superheroes';
  const themes = ['superheroes', 'animals'];
  const [theme, setTheme] = useState(selectedTheme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  };

  return (
    <div>
      <label htmlFor="themeSelector">Select Theme: </label>
      <select id="themeSelector" value={theme} onChange={handleThemeChange}>
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption}
          </option>
        ))}
      </select>
    </div>
  );
};
