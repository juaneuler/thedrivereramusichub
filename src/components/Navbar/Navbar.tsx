import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "isActive" : "notActive"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discografia"
              className={({ isActive }) =>
                isActive ? "isActive" : "notActive"
              }
            >
              Discografía
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive ? "isActive" : "notActive"
              }
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
