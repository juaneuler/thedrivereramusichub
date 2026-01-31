import { useMemo } from "react";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useSongManagement } from "../../hooks/useSongManagement";
import FavoritesList from "../../components/Favoritos/FavoritosList";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersBar from "../../components/FiltersBard/FiltersBar";
import Pagination from "../../components/Pagination/Pagination";
import "./FavoritosPage.scss";

const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const { width } = useScreenSize();

  const itemsPerPage = width < 500 ? 7 : 12;

  const {
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    order,
    setOrder,
    albumFilter,
    setAlbumFilter,
    currentSongs,
    processedSongs,
    totalPages,
    clearFilters,
  } = useSongManagement(favorites, itemsPerPage);

  const uniqueAlbums = useMemo(() => {
    const albumIds = favorites
      .map((c) => c.albumId)
      .filter((id): id is string => !!id);
    return Array.from(new Set(albumIds));
  }, [favorites]);

  return (
    <section className="favorites-page">
      <header className="page-header">
        <div className="title-group">
          <h2>MIS FAVORITOS</h2>
          <p>
            {favorites.length === 0
              ? "Todavía no tenés canciones favoritas"
              : `Gestioná tus canciones preferidas`}
          </p>
        </div>

        {favorites.length > 0 && (
          <>
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
          </>
        )}
      </header>

      {favorites.length > 0 ? (
        <>
          {processedSongs.length > 0 ? (
            <>
              <FavoritesList songs={currentSongs} />

              {favorites.length > 6 && totalPages > 1 && (
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
              <p>
                No se encontraron favoritos que coincidan con "{searchTerm}"
              </p>
              <button onClick={clearFilters}>Limpiar búsqueda</button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <p>Explorá la discografía y marcá tus canciones favoritas!</p>
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;
