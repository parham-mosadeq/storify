import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// router
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsState.products);
  console.log(product);
  const id = window.location.pathname.slice(-1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const nav = useNavigate();
  return (
    <div>
      {product &&
        product.map((item) => {
          if (item.id === +id) {
            console.log(item);
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
          }
        })}

      <button onClick={() => nav(-1)}>back to products</button>
    </div>
  );
};

export default Product;