import React from 'react';
// router
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>page notfound</h3>
      <Link to='/'>home</Link>
    </div>
  );
};

export default Notfound;
