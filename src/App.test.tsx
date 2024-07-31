import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />);
    expect(await screen.findByRole('textbox', { name: /URI/i })).toBeTruthy();
    expect(await screen.findByRole('button', { name: /Submit/i })).toBeTruthy();
  });
});
