import { NavLink } from "react-router-dom";
import type { Cancion } from "../../../types/Cancion";
import "./CancionCard.scss";

interface CancionCardProps {
  cancion: Cancion;
}

const CancionCard = ({ cancion }: CancionCardProps) => {
  return (
    <article className="song-card">
      <img
        src={cancion.coverImage}
        alt={`Portada de ${cancion.title}`}
        className="song-cover"
      />

      <div className="song-content">
        <h3>{cancion.title}</h3>

        <NavLink
          to={`/discografia/canciones/${cancion.id}`}
          className="song-detail"
        >
          Ver más
        </NavLink>
      </div>
    </article>
  );
};

export default CancionCard;