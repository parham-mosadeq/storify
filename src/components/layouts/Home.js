import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const state = useSelector((state) => console.log(state.productsState));
  return (
    <div>
      <h1>this is Home</h1>
    </div>
  );
};

export default Home;
