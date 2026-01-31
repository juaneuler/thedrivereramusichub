import type { Cancion } from "../types/Cancion";

export const parseDate = (dateStr: string): number => {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const sortSongs = (songs: Cancion[], order: string): Cancion[] => {
  if (!order) return songs;

  return [...songs].sort((a, b) => {
    if (order === "asc") return a.title.localeCompare(b.title);
    if (order === "desc") return b.title.localeCompare(a.title);
    if (order === "newest")
      return parseDate(b.releaseDate) - parseDate(a.releaseDate);
    if (order === "oldest")
      return parseDate(a.releaseDate) - parseDate(b.releaseDate);
    return 0;
  });
};
