import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';

const Products = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.productsState);

  console.log(state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>hi this is products</h1>
    </div>
  );
};

export default Products;
