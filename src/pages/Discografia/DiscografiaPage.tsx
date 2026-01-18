import { NavLink } from "react-router-dom";
import "./DiscografíaPage.scss";

const DiscografiaPage = () => {
  return (
    <section className="discografia">
      <div className="discografia-grid">
        <NavLink
          to="/discografia/albums"
          className="discografia-card discos"
        >
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
  );
};

export default DiscografiaPage;