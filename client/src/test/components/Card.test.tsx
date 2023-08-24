import { Card } from '../../components/Card';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';

describe('Card Component', () => {
  beforeEach(() => {
    render(
      <Card
        name="batman"
        img="batman.jpg"
        isHidden={false}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
  test('Card component mounts properly', () => {
    const card = render(
      <Card
        name="batman"
        img="batman.jpg"
        isHidden={false}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(card).toBeTruthy();
  });

  test('Should show card img', () => {
    expect(screen.getByTestId('card-img')).toBeInTheDocument();
  });

  test('Should show card name', () => {
    expect(screen.getByTestId('card-name')).toBeInTheDocument();
  });
});
