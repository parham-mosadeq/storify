import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// components
import Product from './ProductsCart';
import Loader from '../layouts/Loader';
import Filters from '../filters/Filters';
const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsState.products);
  const isLoading = useSelector((state) => state.productsState.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div>
        <Filters />
      </div>
      <h1> products</h1>
      <div>
        {!isLoading ? (
          products.map((item, idx) => {
            const { id } = item;
            return (
              <div key={id}>
                <Product item={item} />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Products;
