import { create } from "zustand";
import { musicService } from "./useMusicService";
import type { Album } from "../types/Album";
import type { Cancion } from "../types/Cancion";

interface MusicState {
  albums: Album[];
  songs: Cancion[];
  isLoading: boolean;
  error: string | null;
  fetchInitialData: () => Promise<void>;
}

export const useMusicStore = create<MusicState>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchInitialData: async () => {
    set({ isLoading: true, error: null });

    try {
      const [albumsData, songsData] = await Promise.all([
        musicService.getAllAlbums(),
        musicService.getAllSongs(),
      ]);

      set({
        albums: albumsData as Album[],
        songs: songsData as Cancion[],
      });
    } catch (error) {
      set({ error: "Error al cargar la música de The Driver Era" });
      console.error("Fetch Error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
