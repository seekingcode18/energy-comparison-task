import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Results from '../Results/Results';

test('renders the app title', () => {
  const { getByText } = render(<App />);
  const title = getByText('Energy Comparison');
  expect(title).toBeInTheDocument();
});

