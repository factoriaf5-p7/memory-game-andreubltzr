import { render } from '@testing-library/react';
import { Navigation } from '../../components/Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation Component', () => {
  test('Navigation component mounts properly', () => {
    const navigation = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(navigation).toBeTruthy();
  });
});
