import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='products'>products</Link>
        </li>
        <li>
          <Link to='aboutUs'>about us</Link>
        </li>
        <li>
          <Link to='cart'>cart</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
