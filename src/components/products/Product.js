import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// router
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Comments from '../comments/Comments';
import Buttons from '../shared/Buttons';

const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsState.products);
  const id = window.location.pathname.slice(-1);

  useEffect(() => {
    if (product.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const nav = useNavigate();
  const loc = useLocation();
  const path = loc.pathname;
  const getId = +path.split('/')[2];

  return (
    <div>
      {path.includes('comments') ? (
        <Link to={`/products/${getId}`}>back to product</Link>
      ) : (
        <Link to='comments'>show comments</Link>
      )}
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
              <div key={id}>
                <img width={100} src={image} alt='' />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>{price}$</p>
                </div>
                <div>
                  <p>rate:{rate}*</p>
                  <p>
                    stock
                    <i>{count}</i>
                  </p>
                </div>
              </div>
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
      <div>
        <button onClick={() => nav('/products')}>back to products</button>
      </div>
    </div>
  );
};

export default Product;
