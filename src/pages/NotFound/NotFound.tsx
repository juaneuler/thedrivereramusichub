import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <title>404 - No Encontrado | THE DRIVER ERA</title>
      <section className="not-found-page">
        <header className="page-header">
          <div className="title-group">
            <h2>404</h2>
            <p>PÁGINA NO ENCONTRADA</p>
          </div>
        </header>

        <div className="error-content">
          <p>Parece que Rocky y Ross se llevaron esta página de gira...</p>
          <Link to="/" className="back-btn">
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;