import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" aria-label="Erdem Yacel — Home">
        <span className="dot" aria-hidden="true"></span>
        <span className="name">Erdem Yacel</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end aria-label="Go to Home page">
          Home
        </NavLink>

        <NavLink to="/about" aria-label="Go to About page">
          About
        </NavLink>

        <NavLink to="/contact" aria-label="Go to Contact page">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;