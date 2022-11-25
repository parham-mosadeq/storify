import React from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
// function
import { isInCart, quantityCount } from '../../services/functions';
// redux
import {
  remove,
  add,
  decrement,
  increment,
  favorite,
} from '../../redux/buttons/actionsBtn';
const Buttons = ({ item, id }) => {
  const tstArr = [1, 2, 3];
  const dispatch = useDispatch();
  const selectedArray =
    useSelector((state) => state.btnState.selectedItemsArray) ?? tstArr;
  const faveItems = useSelector((state) => state.btnState.likedItems) ?? tstArr;
  const mainState =
    useSelector((state) => state.productsState.products) ?? tstArr;

  return (
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

      <button onClick={() => dispatch(favorite(id, item, mainState))}>
        {isInCart(faveItems, id) ? '♥' : '  ❤'}
      </button>
    </div>
  );
};

export default Buttons;
