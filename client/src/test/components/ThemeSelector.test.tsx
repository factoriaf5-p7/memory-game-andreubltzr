import { render } from '@testing-library/react';
import { ThemeSelector } from '../../components/ThemeSelector';

describe('ThemeSelector Component', () => {
  test('ThemeSelector component should mount properly', () => {
    const themeSelector = render(<ThemeSelector />);
    expect(themeSelector).toBeTruthy();
  });
});
