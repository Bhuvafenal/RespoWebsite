import { render, screen } from '@testing-library/react';
import App from './App';

//test case
test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
