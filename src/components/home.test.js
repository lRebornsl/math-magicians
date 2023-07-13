import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Test Home', () => {
  test('Home should Render "Welcome to our page!"', () => {
    render(
      <Home />,
    );

    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
