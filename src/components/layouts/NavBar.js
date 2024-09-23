import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={scrolling ? 'navbar-scroll' : 'navbar'}>
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          COMOCO <img src="./images/images.png" alt="" />
          {/* <i className="fab fa-typo3" /> */}
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Product
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/allsites"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              All sites
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign up
            </Link>
          </li>
        </ul>
        {button && <Button>SIGN UP</Button>}
      </nav>
    </>
  );
}

export default NavBar;
