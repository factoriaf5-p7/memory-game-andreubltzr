import { MemoryRouter } from 'react-router-dom';
import { Game } from '../../pages/Game';
import { render } from '@testing-library/react';

describe('Game Page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );
  });

  test('Game page should mount properly', () => {
    const gameComponent = render(<Game />);
    expect(gameComponent).toBeTruthy();
  });
});
