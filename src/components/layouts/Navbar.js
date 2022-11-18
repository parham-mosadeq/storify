import React from 'react';
import { useSelector } from 'react-redux';
// router
import { Link } from 'react-router-dom';
// redux

const Navbar = () => {
  const itemsCounter = useSelector((state) => state.btnState.itemsCounter);
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

      <div>
        <div>
          <p>{itemsCounter}</p>
          <span>🛒</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
