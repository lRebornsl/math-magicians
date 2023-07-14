import React from 'react';
import { render } from '@testing-library/react';
import RenderCalculator from './renderCalculator';

describe('RenderCalculator', () => {
  it('renders correctly', () => {
    const { container } = render(<RenderCalculator />);
    expect(container).toMatchSnapshot();
  });

  it('renders all buttons', () => {
    const { container } = render(<RenderCalculator />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(19);
  });
});
