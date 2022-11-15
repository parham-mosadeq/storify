import React from 'react';
// function
import { trimDesc, trimTitle } from '../../services/functions';
// router
import { Link } from 'react-router-dom';
const Product = ({ item }) => {
  // *destructuring objects
  const { id, title, price, description, image, category } = item;

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
        <img style={styles} src={image} alt={title} />
        {/* image end */}
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
          <button>+</button>
          <button>-</button>
          <button>delete</button>
        </div>
        {/* buttons end */}
      </article>

      {/* container end */}
    </main>
  );
};

export default Product;
