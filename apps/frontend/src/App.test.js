import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My K8s Lab', () => {
  render(<App />);
  const linkElement = screen.getByText(/K8s Lab/i);
  expect(linkElement).toBeInTheDocument();
});
