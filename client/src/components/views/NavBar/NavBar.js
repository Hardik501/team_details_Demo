import React  from 'react';
import './Navbar.css';

function NavBar() {

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
    </nav>
  )
}

export default NavBar
