import React from 'react';
// function
import { trimDesc, trimTitle } from '../../services/functions';
// router
import { Link } from 'react-router-dom';
// components
import Buttons from '../shared/Buttons';

// styled
import { MainContainer } from '../../shared/ProductsCartComponentStyled';
const ProductCart = ({ item }) => {
  // *destructuring objects
  const { id, title, price, description, image, category } = item;

  const styles = {
    width: '20%',
    display: 'block',
    height: '20%',
  };

  return (
    <MainContainer>
      {/* container start */}

      <article>
        {/* image start */}
        <img style={styles} src={image} alt={title} />
        {/* desc start */}
        <div>
          <div>
            <Link to={`/products/${id}`}>{trimTitle(title)}</Link>
          </div>
          <p>{trimDesc(description)}</p>
        </div>
        {/* desc end */}
        <div>
          <div>
            <p>{price}$</p>
          </div>
          <p>{category}</p>
        </div>
        {/* buttons start */}
        <div>
          <Buttons item={item} id={id} />
        </div>
        {/* buttons end */}
      </article>

      {/* container end */}
    </MainContainer>
  );
};

export default ProductCart;
