import type { Cancion } from "../../types/Cancion";
import { useFavoriteStore } from "../../store/useFavoriteStore";
import spotifyIcon from "../../assets/icons/spotifyIcon.svg";

interface Props {
  songs: Cancion[];
}

const FavoritesList = ({ songs }: Props) => {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <div className="favorites-grid">
      {songs.map((song) => (
        <div key={song.id} className="favorite-card">
          <img src={song.coverImage} alt={song.title} className="song-img" />
          
          <div className="song-info">
            <h3>{song.title}</h3>
            
            <div className="card-actions">
              {song.streaming.spotify && (
                <a 
                  href={song.streaming.spotify} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="spotify-link"
                >
                  <img src={spotifyIcon} alt="Spotify" />
                  <span>Escuchar</span> 
                </a>
              )}
              
              <button 
                onClick={() => toggleFavorite(song)} 
                className="remove-btn"
              >
                Eliminar de Favoritos
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;