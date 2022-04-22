import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styleSheet/Navbar.css'; 


function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre mi 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/trabajos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portafolio Web
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contacto'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
