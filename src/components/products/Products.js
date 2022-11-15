import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
import Product from './ProductsCart';

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsState.products);
  const isLoading = useSelector((state) => state.productsState.isLoading);
  const errorMsg = useSelector((state) => state.productsState.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
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
          <h1>notfound</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
