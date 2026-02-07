import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/paths";
import "./Navbar.scss";

const NavBar = () => {
  const navLinks = [
    { path: ROUTES.HOME, label: "Home" },
    { path: ROUTES.DISCOGRAFIA.ROOT, label: "Discografía" },
    { path: ROUTES.FAVORITOS, label: "Favoritos" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "isActive" : "notActive"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;