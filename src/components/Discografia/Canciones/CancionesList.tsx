import type { Cancion } from "../../../types/Cancion";
import CancionCard from "./CancionCard";
import "./CancionesList.scss"

interface Props {
  canciones: Cancion[];
}

const CancionesList = ({ canciones }: Props) => {
  return (
    <ul className="canciones-grid">
      {canciones.map((cancion) => (
        <CancionCard key={cancion.id} cancion={cancion} />
      ))}
    </ul>
  );
};

export default CancionesList;
