import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import type { Cancion } from "../types/Cancion";

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

          if (isAlreadyFav) {
            toast.error("Eliminado de favoritos", {
              description: song.title,
            });
            return {
              favorites: state.favorites.filter((s) => s.id !== song.id),
            };
          } else {
            toast.success("Agregado a favoritos", {
              description: song.title,
            });
            return { favorites: [...state.favorites, song] };
          }
        }),
    }),
    { name: "favorites-storage" },
  ),
);
