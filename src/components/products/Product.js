import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// router
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
// components
import Comments from '../comments/Comments';
// styles
import {
  MainDivContainer,
  ProductContainer,
  Description,
  Price,
  Rate,
  Stock,
  BtnContainers,
} from '../../shared/ProductComponentStyled';
const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsState.products);
  const id = window.location.pathname.slice(-1);

  useEffect(() => {
    if (product.length === 0) {
      dispatch(fetchProducts());
    }
    return () => [];
  }, []);

  const nav = useNavigate();
  const loc = useLocation();
  const path = loc.pathname;
  const getId = +path.split('/')[2];

  return (
    <>
      <MainDivContainer>
        {product &&
          product.map((item) => {
            if (item.id === +id) {
              const {
                id,
                image,
                title,
                description,
                price,
                rating: { rate, count },
              } = item;
              return (
                <ProductContainer key={id}>
                  <img width={100} src={image} alt='' />
                  <div>
                    <h3>{title}</h3>
                    <Description>{description}</Description>
                    <Price>{price}$</Price>
                  </div>
                  <div>
                    <Rate>rate:{rate}*</Rate>
                    <Stock>
                      stock
                      <>{count}</>
                    </Stock>
                  </div>
                </ProductContainer>
              );
            } else {
              return [];
            }
          })}
        <div>
          <Routes>
            <Route path='comments' element={<Comments />}></Route>
          </Routes>
        </div>
        <BtnContainers>
          {path.includes('comments') ? (
            <button onClick={() => nav(`/products/${getId}`)}>
              back to product
            </button>
          ) : (
            <button onClick={() => nav(`comments`)} to='comments'>
              show comments
            </button>
          )}
          <button onClick={() => nav('/products')}>back to products</button>
        </BtnContainers>
      </MainDivContainer>
    </>
  );
};

export default Product;
