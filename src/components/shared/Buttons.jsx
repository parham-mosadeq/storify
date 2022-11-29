import React, { useEffect } from 'react';
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
// icons
import {
  FaHeart,
  FaHeartBroken,
  FaShoppingBag,
  FaPlus,
  FaMinus,
  FaTrash,
} from 'react-icons/fa';
// styles
import {
  AddToCartBtn,
  FaveBtn,
  BtnContainer,
  TrashBtn,
  PlusBtn,
  MinusBtn,
} from '../../shared/BtnComponentStyled';
const Buttons = ({ item, id }) => {
  const tstArr = [1, 2, 3];
  const dispatch = useDispatch();
  const selectedArray =
    useSelector((state) => state.btnState.selectedItemsArray) ?? tstArr;
  const faveItems = useSelector((state) => state.btnState.likedItems) ?? tstArr;
  const mainState =
    useSelector((state) => state.productsState.products) ?? tstArr;

  return (
    <BtnContainer>
      {quantityCount(selectedArray, id) === 1 && (
        <TrashBtn onClick={() => dispatch(remove(id))}>
          <FaTrash />
        </TrashBtn>
      )}
      {quantityCount(selectedArray, id) > 1 && (
        <MinusBtn onClick={() => dispatch(decrement(id))}>
          <FaMinus />
        </MinusBtn>
      )}
      {quantityCount(selectedArray, id) > 0 && (
        <span> {quantityCount(selectedArray, id)} </span>
      )}
      {isInCart(selectedArray, id) ? (
        <PlusBtn onClick={() => dispatch(increment(id))}>
          <FaPlus />
        </PlusBtn>
      ) : (
        <>
          <AddToCartBtn onClick={() => dispatch(add(id, item))}>
            <FaShoppingBag />
          </AddToCartBtn>
        </>
      )}

      <FaveBtn onClick={() => dispatch(favorite(id, item, mainState))}>
        {isInCart(faveItems, id) ? <FaHeartBroken /> : <FaHeart />}
      </FaveBtn>
    </BtnContainer>
  );
};

export default Buttons;
