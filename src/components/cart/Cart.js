import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// functions
import { clear, checkout } from '../../redux/buttons/actionsBtn';
// styles
import {
  MainCartContainer,
  ItemCartContainer,
  ItemCartInfoContainer,
  Wrapper,
  P,
} from '../../shared/CartComponentStyled';

const Cart = () => {
  const state = useSelector((state) => state.btnState);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <MainCartContainer>
      {/* <p>total items price: {state.total}</p> */}
      <P>total items counts: {state.itemsCounter}</P>
      <Wrapper>
        {!state.checkout ? (
          state.selectedItemsArray ? (
            state.selectedItemsArray.map((item) => {
              return (
                <ItemCartContainer key={item.id}>
                  <div>
                    <img
                      src={item.selectedItems.image}
                      alt={item.selectedItems.title}
                    />
                  </div>
                  <ItemCartInfoContainer>
                    <p>
                      <span>name:</span>
                      {item.selectedItems.title}
                    </p>
                    <p>
                      <span>price:</span>
                      {item.selectedItems.price}$
                    </p>
                    <p>
                      <span>chosen products quantity:</span>
                      {item.quantity}
                    </p>
                  </ItemCartInfoContainer>
                </ItemCartContainer>
              );
            })
          ) : (
            <h1>your cart is empty</h1>
          )
        ) : (
          <p>checkout</p>
        )}
      </Wrapper>
      <div>
        {!state.itemsCounter ? (
          <button onClick={() => nav('/products')}>products</button>
        ) : (
          <>
            <button onClick={() => dispatch(clear())}>clear Cart</button>
            <button onClick={() => dispatch(checkout())}>checkout</button>
          </>
        )}
      </div>
    </MainCartContainer>
  );
};

export default Cart;
