import { useState, useMemo } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useDebounce } from "../../hooks/useDebounce";
import { canciones } from "../../data/canciones";
import CancionesList from "../../components/Discografia/Canciones/CancionesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import FiltersBar from "../../components/FiltersBard/FiltersBar";
import "./CancionesPage.scss";

const CancionesPage = () => {
  const { width } = useScreenSize();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState<string>("");
  const [albumFilter, setAlbumFilter] = useState("todos");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const uniqueAlbums = useMemo(() => {
    const albumIds = canciones
      .map((c) => c.albumId)
      .filter((id): id is string => !!id);

    return Array.from(new Set(albumIds));
  }, []);

  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  let processedSongs = canciones.filter((c) =>
    c.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  if (albumFilter === "singles") {
    processedSongs = processedSongs.filter((c) => !c.albumId || c.isSingle);
  } else if (albumFilter !== "todos") {
    processedSongs = processedSongs.filter((c) => c.albumId === albumFilter);
  }

if (order) {
  processedSongs = [...processedSongs].sort((a, b) => {
    if (order === "asc") return a.title.localeCompare(b.title);
    if (order === "desc") return b.title.localeCompare(a.title);
    if (order === "newest") return parseDate(b.releaseDate) - parseDate(a.releaseDate);
    if (order === "oldest") return parseDate(a.releaseDate) - parseDate(b.releaseDate);
    return 0;
  });
}

  const itemsPerPage = width < 500 ? 7 : 12;
  const totalPages = Math.ceil(processedSongs.length / itemsPerPage);
  const validatedPage = Math.min(currentPage, Math.max(1, totalPages));

  const currentSongs = processedSongs.slice(
    (validatedPage - 1) * itemsPerPage,
    validatedPage * itemsPerPage,
  );

  return (
    <section className="canciones-page">
      <header className="page-header">
        <div className="title-group">
          <h2>CANCIONES</h2>
          <p>
            {!debouncedSearch
              ? "Explorá todo el material de la banda"
              : `Resultados para "${debouncedSearch}" (${processedSongs.length})`}
          </p>
        </div>

        <SearchBar
          value={searchTerm}
          onChange={(val) => {
            setSearchTerm(val);
            setCurrentPage(1);
          }}
        />

        <FiltersBar
          albums={uniqueAlbums}
          currentOrder={order}
          currentAlbum={albumFilter}
          onOrderChange={(newOrder) => {
            setOrder(newOrder);
            setCurrentPage(1);
          }}
          onAlbumChange={(newAlbum) => {
            setAlbumFilter(newAlbum);
            setCurrentPage(1);
          }}
        />
      </header>

      {processedSongs.length > 0 ? (
        <>
          <CancionesList canciones={currentSongs} />

          {totalPages > 1 && (
            <Pagination
              currentPage={validatedPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}
        </>
      ) : (
        <div className="no-results">
          <h3>No hubo suerte...</h3>
          <p>No encontramos nada que coincida con tus filtros.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setAlbumFilter("todos");
              setOrder("asc");
            }}
          >
            Limpiar todos los filtros
          </button>
        </div>
      )}
    </section>
  );
};

export default CancionesPage;
