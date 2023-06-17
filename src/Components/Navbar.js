import React from 'react';
import '../Components/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Shopping Adda</div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="/">Products</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
