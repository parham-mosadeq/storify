import React from 'react';
// function
import { trimTitle } from '../../services/functions';
const Product = ({ item }) => {
  // *destructuring objects
  const { id, title, price, description, images } = item;

  const styles = {
    width: '20%',
    display: 'block',
    height: '20%',
  };

  return (
    <main>
      {/* container start */}

      <article>
        {/* image start */}
        <img style={styles} src={images} alt={title} />
        {/* image end */}
        {/* desc start */}
        <div>
          <div>{trimTitle(title)}</div>
          <p>{description}</p>
        </div>
        {/* desc end */}
      </article>

      {/* container end */}
    </main>
  );
};

export default Product;
