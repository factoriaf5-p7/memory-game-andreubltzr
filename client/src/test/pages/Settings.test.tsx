import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Settings } from '../../pages/Settings';
import { ThemeSelector } from '../../components/ThemeSelector';
import { DifficultySelector } from '../../components/DifficultySelector';

describe('Settings Page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Settings />
      </MemoryRouter>
    );
  });
  test('Settings page should mount properly', () => {
    const wrapper = render(<Settings />);

    expect(wrapper).toBeTruthy();
  });

  test('ThemeSelector should render', () => {
    const themeSelector = render(<ThemeSelector />);
    expect(themeSelector).toBeTruthy();
  });

  test('DifficultySelector should render', () => {
    const difficultySelector = render(<DifficultySelector />);
    expect(difficultySelector).toBeTruthy();
  });
});
