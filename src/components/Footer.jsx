import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Erdem Yacel</p>
          <p className="footer-role">Data Science Student</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-meta">
          <p>© 2026 Erdem Yacel</p>
          <p className="built">Built with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;