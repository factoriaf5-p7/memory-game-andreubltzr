import { render, screen } from '@testing-library/react';
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

  test('Renders ThemeSelector options', () => {
    const title = screen.getByText('animals');
    expect(title).toBeInTheDocument();
  });

  test('Renders DifficultySelector options', () => {
    const title = screen.getByText('hard');
    expect(title).toBeInTheDocument();
  });

  test('ThemeSelector component should render', () => {
    const themeSelector = render(<ThemeSelector />);
    expect(themeSelector).toBeTruthy();
  });

  test('DifficultySelector component should render', () => {
    const difficultySelector = render(<DifficultySelector />);
    expect(difficultySelector).toBeTruthy();
  });
});
