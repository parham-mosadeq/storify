import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// components
import ProductCart from './ProductsCart';
import Loader from '../layouts/Loader';
import Filters from '../filters/Filters';
const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsState.products);
  const isLoading = useSelector((state) => state.productsState.isLoading);

  useEffect(() => {
    if (!products.length > 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <div>
        <Filters />
      </div>
      <h1> products</h1>
      <div>
        {products.length > 0 && !isLoading ? (
          products.map((item) => {
            return (
              <div key={item.id}>
                <ProductCart item={item} />
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
