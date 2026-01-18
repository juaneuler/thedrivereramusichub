import { canciones } from "../../data/canciones";
import CancionesList from "../../components/Discografia/Canciones/CancionesList";
import "./CancionesPage.scss"

const CancionesPage = () => {
  return (
    <section className="canciones-page">
        <h2>CANCIONES</h2>
        <p>Explorá todo el material de la banda</p>
      <CancionesList canciones={canciones} />
    </section>
  );
};

export default CancionesPage;