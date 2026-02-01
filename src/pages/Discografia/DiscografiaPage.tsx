import { NavLink } from "react-router-dom";
import "./DiscografíaPage.scss";

const DiscografiaPage = () => {
  return (
    <>
      <title>Discografía | THE DRIVER ERA</title>
      <meta
        name="description"
        content="Explorá todos los álbumes y canciones de The Driver Era."
      />
      <section className="discografia">
        <div className="discografia-grid">
          <NavLink to="/discografia/albums" className="discografia-card discos">
            <div className="overlay">
              <h2>Albums</h2>
            </div>
          </NavLink>

          <NavLink
            to="/discografia/canciones"
            className="discografia-card canciones"
          >
            <div className="overlay">
              <h2>Canciones</h2>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default DiscografiaPage;
