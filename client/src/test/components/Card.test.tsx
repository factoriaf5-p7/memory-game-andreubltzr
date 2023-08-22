import { Card } from '../../components/Card';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';

test('Card component mounts properly', () => {
  const wrapper = render(
    <Card
      name="batman"
      img="batman.jpg"
      isHidden={false}
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />
  );

  expect(wrapper).toBeTruthy();
});
