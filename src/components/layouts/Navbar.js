import React, { useState } from 'react';
// redux
import { useSelector } from 'react-redux';
// router
import { Link } from 'react-router-dom';

//styles
import { MainNavbar, MainNavBtn } from '../../shared/NavComponentStyled';

const Navbar = () => {
  const itemsCounter = useSelector((state) => state.btnState.itemsCounter);

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MainNavBtn onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? 'x' : 'o'}
      </MainNavBtn>
      <MainNavbar showMenu={showMenu}>
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
            <Link to='/favourite'>favourite</Link>
          </li>
          <li>
            <Link to='cart'>cart ({itemsCounter})</Link>
          </li>
        </ul>
      </MainNavbar>
    </>
  );
};

export default Navbar;
