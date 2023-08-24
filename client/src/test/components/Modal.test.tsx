import { render } from '@testing-library/react';
import { Modal } from '../../components/Modal';

describe('Modal Component', () => {
  test('Modal component should mount properly', () => {
    const wrapper = render(
      <Modal
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});
