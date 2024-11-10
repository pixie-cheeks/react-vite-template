import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  test('renders main text', () => {
    render(<App />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
