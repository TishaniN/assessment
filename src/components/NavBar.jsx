import React from 'react';
import CartIcon from './CartIcon';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src="/images/logo.png" alt="Site Logo" className='im'/></div> {/* Site Logo */}
      <CartIcon /> {/* Shopping Cart Icon */}
    </nav>
  );
};

export default NavBar;
