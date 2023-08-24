import { render } from '@testing-library/react';
import { Navigation } from '../../components/Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation Component', () => {
  test('Navigation component mounts properly', () => {
    const wrapper = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy();
  });
});
