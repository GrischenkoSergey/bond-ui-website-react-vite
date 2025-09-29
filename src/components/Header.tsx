import React, { useState, useEffect } from 'react';
import { Link /*, useLocation*/ } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  // const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Dynamic positioning for menu
  useEffect(() => {
    if (isMenuOpen) {
      const updateMenuPosition = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const menuWidth = 280;
        const margin = 20;

        let style: React.CSSProperties = {};

        // Handle width overflow
        if (viewportWidth < menuWidth + margin + 20) {
          // Very small screens - center the menu
          style = {
            left: '50%',
            right: 'auto',
            transform: 'translateX(-50%)',
            width: `${Math.min(menuWidth, viewportWidth - margin)}px`
          };
        } else if (viewportWidth < 400) {
          // Small screens - ensure some margin
          style = {
            right: '10px',
            width: '260px'
          };
        }

        // Handle height overflow in landscape
        const isLandscape = viewportWidth > viewportHeight;
        if (isLandscape && viewportHeight < 500) {
          const topSpacing = viewportHeight < 400 ? 50 : 60;
          const maxHeight = viewportHeight - (topSpacing + 20);

          style = {
            ...style,
            top: `${topSpacing}px`,
            maxHeight: `${maxHeight}px`,
            overflowY: 'auto'
          };
        } else if (isLandscape && viewportHeight < 800) {
          // Tablet landscape
          style = {
            ...style,
            top: '80px',
            maxHeight: `${viewportHeight - 100}px`
          };
        }

        setMenuStyle(style);
      };

      updateMenuPosition();
      window.addEventListener('resize', updateMenuPosition);

      return () => {
        window.removeEventListener('resize', updateMenuPosition);
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  const handleOverlayClick = () => {
    closeMenu();
  };

  return (
    <>
      <header>
        <div id="logo">
          <Link to="/">
            <img
              src="./images/logowhite.png"
              width="230"
              height="44"
              alt="Bond Logo"
            />
          </Link>
        </div>

        <div id="logo2">
          <Link to="/">
            <img
              src="./images/logoblack.png"
              width="230"
              height="44"
              alt="Bond Logo"
            />
          </Link>
        </div>

        <div id="heading">
          <nav>
            <button
              className="menu-toggle"
              id="menu-toggle"
              aria-label="Toggle Navigation"
              onClick={toggleMenu}
            >
              &#9776;
            </button>

            <div className={`scrollmenu ${isMenuOpen ? 'show' : ''}`} style={menuStyle}>
              <Link
                to="/"
                title="Word Add-in"
                className="homelink"
                onClick={closeMenu}
              >
                Word Add-in
              </Link>
              <Link
                to="/addinmanual"
                title="Word Add-in Manual"
                className="addinmanuallink"
                onClick={closeMenu}
              >
                Word Add-in Manual
              </Link>
              <Link
                to="/programpicker"
                title="Program Picker"
                className="programpickerlink"
                onClick={closeMenu}
              >
                Program Picker
              </Link>
              <Link
                to="/programpickermanual"
                title="Program Picker Manual"
                className="ppmanuallink"
                onClick={closeMenu}
              >
                Program Picker Manual
              </Link>
              <Link
                to="/buynow"
                title="Buy Now"
                className="buynowlink"
                onClick={closeMenu}
              >
                Buy Now
              </Link>
              <Link
                to="/support"
                title="Support"
                className="supportlink"
                onClick={closeMenu}
              >
                Support
              </Link>
              <button
                className="theme-toggle-btn"
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontFamily: '"ADLaM Display", sans-serif',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                {isDarkMode ? '=Light=' : '=Dark='}
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={handleOverlayClick}
        />
      )}
    </>
  );
};

export default Header;
