import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import AlbumsList from './AlbumsList';
import type { Album } from '../../../types/Album';

// 1. Creamos data de prueba (Mock)
const mockAlbums: Album[] = [
  {
    id: 'album-1',
    title: 'X',
    releaseDate: '2019',
    formats: ['Digital'],
    coverImage: 'x.jpg',
    trackIds: [],
    streaming: {},
  } as unknown as Album, // Usamos este hack para no completar todas las propiedades si no son necesarias
  {
    id: 'album-2',
    title: 'Girlfriend',
    releaseDate: '2021',
    formats: ['Vinyl'],
    coverImage: 'gf.jpg',
    trackIds: [],
    streaming: {},
  } as unknown as Album,
];

describe('AlbumsList Component', () => {
  it('should render the correct number of album cards', () => {
    // 2. Renderizamos envolviendo en BrowserRouter porque AlbumCard usa Link
    render(
      <BrowserRouter>
        <AlbumsList albums={mockAlbums} />
      </BrowserRouter>
    );

    // 3. Verificamos que se rendericen los títulos de los álbumes
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Girlfriend')).toBeInTheDocument();
  });

  it('should render a list (ul) with the correct CSS class', () => {
    render(
      <BrowserRouter>
        <AlbumsList albums={mockAlbums} />
      </BrowserRouter>
    );

    const listElement = screen.getByRole('list'); // Busca el <ul>
    expect(listElement).toHaveClass('albums-grid');
  });

  it('should render nothing if the albums array is empty', () => {
    const { container } = render(
      <BrowserRouter>
        <AlbumsList albums={[]} />
      </BrowserRouter>
    );

    // Buscamos el <ul>
    const listElement = container.querySelector('ul');
    // Debería estar vacío (sin hijos <li>)
    expect(listElement?.children.length).toBe(0);
  });
});