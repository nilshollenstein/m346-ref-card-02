import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app status message', () => {
  render(<App />);

  const message = screen.getByText(/up and running/i);

  expect(message).toBeInTheDocument();
});