import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Cancion } from '../types/Cancion';

interface FavoriteState {
  favorites: Cancion[];
  toggleFavorite: (song: Cancion) => void;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (song) => 
        set((state) => {
          const isAlreadyFav = state.favorites.some((s) => s.id === song.id);
          return {
            favorites: isAlreadyFav
              ? state.favorites.filter((s) => s.id !== song.id)
              : [...state.favorites, song],
          };
        }),
    }),
    { name: 'favorites-storage' }
  )
);