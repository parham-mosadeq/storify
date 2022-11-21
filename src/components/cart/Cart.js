import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// functions
import { clear, checkout } from '../../redux/buttons/actionsBtn';

const Cart = () => {
  const state = useSelector((state) => state.btnState);

  const dispatch = useDispatch();

  console.log(state);
  return (
    <div>
      {/* <p>total items price: {state.total}</p> */}
      <p>total items counts: {state.itemsCounter}</p>
      <div>
        {!state.checkout ? (
          state.selectedItemsArray.length ? (
            state.selectedItemsArray.map((item) => {
              console.log(item.selectedItemsArray);
              return (
                <div key={item.id}>
                  <div></div>
                  <img
                    width={60}
                    src={item.selectedItems.image}
                    alt={item.selectedItems.title}
                  />
                  <div>
                    <p>name: {item.selectedItems.title}</p>
                    <p>price: {item.selectedItems.price}$</p>
                    <p>chosen products quantity: {item.quantity}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>your cart is empty</h1>
          )
        ) : (
          <p>checkout</p>
        )}
      </div>
      <div>
        {!state.itemsCounter ? (
          <button onClick={() => dispatch(clear())}>clear Cart</button>
        ) : (
          <>
            <button onClick={() => dispatch(clear())}>clear Cart</button>
            <button onClick={() => dispatch(checkout())}>checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
