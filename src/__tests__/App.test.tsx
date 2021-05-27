import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Tasks WebApp', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tasks WebApp/i);
  expect(linkElement).toBeInTheDocument();
});
