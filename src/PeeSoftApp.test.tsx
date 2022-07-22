import React from 'react';
import { render, screen } from '@testing-library/react';
import ByChipApp from './PeeSoftApp';

test('renders learn react link', () => {
  render(<ByChipApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
