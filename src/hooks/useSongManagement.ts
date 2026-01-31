import { useState, useMemo } from "react";
import type { Cancion } from "../types/Cancion";
import { useDebounce } from "./useDebounce";
import { sortSongs } from "../utils/cancionesFilters";

export const useSongManagement = (initialSongs: Cancion[], itemsPerPage: number) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<string>("");
  const [albumFilter, setAlbumFilter] = useState("todos");
  
  const debouncedSearch = useDebounce(searchTerm, 400);

  const processedSongs = useMemo(() => {
    let result = initialSongs.filter((c) =>
      c.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    if (albumFilter === "singles") {
      result = result.filter((c) => !c.albumId || c.isSingle);
    } else if (albumFilter !== "todos") {
      result = result.filter((c) => c.albumId === albumFilter);
    }

    return sortSongs(result, order);
  }, [initialSongs, debouncedSearch, albumFilter, order]);

  const totalPages = Math.ceil(processedSongs.length / itemsPerPage);
  const validatedPage = Math.min(currentPage, Math.max(1, totalPages));

  const currentSongs = useMemo(() => {
    return processedSongs.slice(
      (validatedPage - 1) * itemsPerPage,
      validatedPage * itemsPerPage
    );
  }, [processedSongs, validatedPage, itemsPerPage]);

  const clearFilters = () => {
    setSearchTerm("");
    setAlbumFilter("todos");
    setOrder("asc");
    setCurrentPage(1);
  };

  return {
    searchTerm, setSearchTerm,
    currentPage: validatedPage, setCurrentPage,
    order, setOrder,
    albumFilter, setAlbumFilter,
    processedSongs,
    currentSongs,
    totalPages,
    debouncedSearch,
    clearFilters
  };
};