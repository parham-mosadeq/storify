import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// router
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsState.products);
  console.log(product);
  const category = window.location.pathname.split('/')[3];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(category);

  return (
    <div>
      {product &&
        product.map((item) => {
          if (item.category === category) {
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

    </div>
  );
};

export default Categories;
