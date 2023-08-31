import { render } from '@testing-library/react';
import { DifficultySelector } from '../../components/DifficultySelector';

describe('DifficultySelector Component', () => {
  test('DifficultySelector component should mount properly', () => {
    const difficultySelector = render(<DifficultySelector />);
    expect(difficultySelector).toBeTruthy();
  });
});
