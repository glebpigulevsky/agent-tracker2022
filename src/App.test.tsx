import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Agent tracker! made by misspillis/i);
  expect(linkElement).toBeInTheDocument();
});
