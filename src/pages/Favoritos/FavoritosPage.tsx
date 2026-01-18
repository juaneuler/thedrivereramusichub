import { useFavoriteStore } from "../../store/useFavoriteStore";
import FavoritosList from "../../components/Favoritos/FavoritosList";
import "./FavoritosPage.scss";

const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <section className="favorites-page">
      <h2>FAVORITOS</h2>
      <p>Gestioná tus canciones preferidas</p>
      
      {favorites.length > 0 ? (
        <FavoritosList songs={favorites} />
      ) : (
        <div className="empty-state">
          <p>Todavía no tenés canciones favoritas. Explora la discografía!</p>
        </div>
      )}
    </section>
  );
};

export default FavoritesPage;