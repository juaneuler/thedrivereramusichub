import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Bio from './Bio';

describe('Bio Component', () => {
  it('should render the correct title', () => {
    render(<Bio />);
    
    const title = screen.getByText(/SOBRE LA BANDA/i);
    expect(title).toBeInTheDocument();
  });

  it('should mention the latest album Obsession', () => {
    render(<Bio />);
    
    const album = screen.getByText(/Obsession/i);
    expect(album).toBeInTheDocument();
  });
});