import { useMemo } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useSongManagement } from "../../hooks/useSongManagement";
import { useMusicStore } from "../../services/useMusicStore";
import CancionesList from "../../components/Discografia/Canciones/CancionesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import FiltersBar from "../../components/FiltersBard/FiltersBar";
import "./CancionesPage.scss";

const CancionesPage = () => {
  const { width } = useScreenSize();
  const itemsPerPage = width < 500 ? 7 : 12;

  const cancionesFromStore = useMusicStore((state) => state.songs);

  const {
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    order,
    setOrder,
    albumFilter,
    setAlbumFilter,
    processedSongs,
    currentSongs,
    totalPages,
    debouncedSearch,
    clearFilters,
  } = useSongManagement(cancionesFromStore, itemsPerPage);

  const uniqueAlbums = useMemo(() => {
    const albumIds = cancionesFromStore
      .map((c) => c.albumId)
      .filter((id): id is string => !!id);
    return Array.from(new Set(albumIds));
  }, [cancionesFromStore]);

  return (
    <>
      <title>Canciones | THE DRIVER ERA</title>
      <meta
        name="description"
        content="Explorá todas las canciones de TDE, filtrá por álbum y encontrá tus favoritas!"
      />
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
                currentPage={currentPage}
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
            <button onClick={clearFilters}>Limpiar todos los filtros</button>
          </div>
        )}
      </section>
    </>
  );
};

export default CancionesPage;
