import React from 'react';
// function
import { trimDesc, trimTitle } from '../../services/functions';
// router
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// function
import { isInCart, quantityCount } from '../../services/functions';
// import { remove, add, minus } from '../../redux/products/actionsProducts';
import {
  remove,
  add,
  decrement,
  increment,
} from '../../redux/buttons/actionsBtn';
const ProductCart = ({ item }) => {
  // *destructuring objects
  const { id, title, price, description, image, category } = item;

  const styles = {
    width: '20%',
    display: 'block',
    height: '20%',
  };

  const dispatch = useDispatch();
  const selectedArray = useSelector(
    (state) => state.btnState.selectedItemsArray
  );

  // const products = useSelector((state) => state.productsState.products);
  return (
    <main>
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
          {quantityCount(selectedArray, id) === 1 && (
            <button onClick={() => dispatch(remove(id))}>delete</button>
          )}
          {quantityCount(selectedArray, id) > 1 && (
            <button onClick={() => dispatch(decrement(id))}>-</button>
          )}
          {quantityCount(selectedArray, id) > 0 && (
            <span> {quantityCount(selectedArray, id)} </span>
          )}
          {isInCart(selectedArray, id) ? (
            <button onClick={() => dispatch(increment(id))}>+</button>
          ) : (
            <button onClick={() => dispatch(add(id, item))}>Add to Cart</button>
          )}
        </div>
        {/* buttons end */}
      </article>

      {/* container end */}
    </main>
  );
};

export default ProductCart;
