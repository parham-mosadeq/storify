import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
import { fetchComments } from '../../redux/comments/actionsComments';

// components
import ProductCart from './ProductsCart';
import Loader from '../layouts/Loader';
import Filters from '../filters/Filters';

// styles
import {
  MainContainer,
  ProductsContainer,
  ProductContainer,
  FiltersContainer,
} from '../../shared/MainProductsComponentStyled';
const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsState.products);
  const isLoading = useSelector((state) => state.productsState.isLoading);

  useEffect(() => {
    if (!products.length > 0) {
      dispatch(fetchProducts());
    }
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <Filters />
      <MainContainer>
        <h1> products</h1>
        <FiltersContainer></FiltersContainer>
        <ProductsContainer>
          {products.length > 0 && !isLoading ? (
            products.map((item) => {
              return (
                <ProductContainer key={item.id}>
                  <ProductCart item={item} />
                </ProductContainer>
              );
            })
          ) : (
            <Loader />
          )}
        </ProductsContainer>
      </MainContainer>
    </>
  );
};

export default Products;
