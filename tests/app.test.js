import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect } from 'vitest';

describe('Portfolio Pro App', () => {
  it('renders hero section with name, title, and CTA', () => {
    render(<App />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer & UI Designer')).toBeInTheDocument();
    expect(screen.getByText('View My Work')).toBeInTheDocument();
  });

  it('renders about section with descriptive paragraph', () => {
    render(<App />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    const aboutText = screen.getByText(/I'm a passionate full-stack developer/i);
    expect(aboutText).toBeInTheDocument();
  });

  it('renders three project cards with correct content', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: /View Demo/i })).toHaveLength(3);
    expect(screen.getByText('E-Commerce Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Weather Forecast Tool')).toBeInTheDocument();
  });

  it('project cards open links in new tab', () => {
    render(<App />);
    const cards = screen.getAllByRole('link', { name: /View Demo/i });
    cards.forEach(card => {
      expect(card).toHaveAttribute('target', '_blank');
      expect(card).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('applies responsive layout classes', () => {
    render(<App />);
    const projectGrid = screen.getByTestId('projects-grid');
    expect(projectGrid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
  });
});