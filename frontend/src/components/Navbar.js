import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const closeMobileMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateButtonVisibility = () => {
      setShowButton(window.innerWidth > 960);
    };

    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);

    return () => {
      window.removeEventListener('resize', updateButtonVisibility);
    };
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL
          <i className="fab fa-typo3" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
        </button>

        <ul
          id="primary-navigation"
          className={menuOpen ? 'nav-menu active' : 'nav-menu'}
        >
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item nav-signup-mobile">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {showButton && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
