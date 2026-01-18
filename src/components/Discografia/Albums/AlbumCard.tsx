import type { Album } from "../../../types/Album";
import { Link } from "react-router-dom";
import "./AlbumCard.scss";

interface Props {
  album: Album;
}

const AlbumCard = ({ album }: Props) => {
  return (
    <article className="album-card">
      {/* Etiqueta de Deluxe Edition condicional */}
      {album.deluxeEdition?.exists && (
        <span className="deluxe-badge">Deluxe Edition</span>
      )}

      <div className="album-cover-wrapper">
        <img src={album.coverImage} alt={album.title} />
      </div>

      <div className="album-content">
        <h3>{album.title}</h3>
        <p className="album-year">{album.releaseDate.split("-").at(-1)}</p>

        {/* Badges de Formatos */}
        <div className="formats-container">
          {album.formats.map((format) => (
            <span key={format} className={`format-badge ${format}`}>
              {format}
            </span>
          ))}
        </div>

        <Link
          to={`/discografia/albums/${album.id}`}
          className="album-detail-btn"
        >
          Ver Detalles
        </Link>
      </div>
    </article>
  );
};

export default AlbumCard;
