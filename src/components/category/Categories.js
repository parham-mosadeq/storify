import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/actionsProducts';
// router
import { useNavigate, Link } from 'react-router-dom';
// styles
import {
  MainCatContainer,
  ItemCatContainer,
  P,
} from '../../shared/CategoriesComponentStyled';
import {
  Rate,
  Stock,
  Price,
  BtnContainers,
} from '../../shared/ProductComponentStyled';
const Categories = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productsState.products);
  const category = window.location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <MainCatContainer>
      {product &&
        product.map((item) => {
          // checking to see if cat's are the selected ones
          // the returned cat's from api wasn't the same as cat's in
          // item object, in order to solve it ".slice() was used"
          if (item.category.slice(0, 3) === category.slice(0, 3)) {
            const {
              id,
              image,
              title,
              description,
              price,
              rating: { rate, count },
            } = item;
            return (
              <ItemCatContainer key={id}>
                <img width={100} src={image} alt='' />
                <div>
                  <h3>
                    <Link to={`/products/${id}`}>{title}</Link>
                  </h3>
                  <P>{description}</P>
                  <Price>{price}$</Price>
                </div>
                <div>
                  <Rate>rate:{rate}*</Rate>
                  <Stock>
                    stock
                    <>{count}</>
                  </Stock>
                </div>
              </ItemCatContainer>
            );
          } else {
            return [];
          }
        })}

      <BtnContainers>
        <button onClick={() => nav('/products')}>back to products</button>
        <button onClick={() => nav('/')}>back to home</button>
      </BtnContainers>
    </MainCatContainer>
  );
};

export default Categories;
