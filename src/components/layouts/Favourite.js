import React from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { removeFave } from '../../redux/buttons/actionsBtn';
// router
import { Link } from 'react-router-dom';
//styles
import {
  MainFavContainer,
  FaveItemContainer,
} from '../../shared/FavouriteComponentStyled';
// icons
import { FaHeartBroken } from 'react-icons/fa';
const Favourite = () => {
  const faveItems = useSelector((state) => state.btnState.likedItems);
  const dispatch = useDispatch();
  return (
    <MainFavContainer>
      {faveItems.length ? (
        faveItems.map((item) => {
          return (
            <FaveItemContainer key={item.id}>
              <div>
                <img width={50} src={item.image} alt={item.title} />
              </div>
              <div>
                <h4>
                  <Link to={`/products/${item.id}`}>{item.title}</Link>
                </h4>
                <Link to={`/categories/${item.category}`}>{item.category}</Link>

                <p>{item.price}$</p>
              </div>
              <button
                onClick={() => {
                  dispatch(removeFave(item.id, faveItems));
                }}
              >
                <FaHeartBroken />
              </button>
            </FaveItemContainer>
          );
        })
      ) : (
        <h1>your favourite bag is empty</h1>
      )}
    </MainFavContainer>
  );
};

export default Favourite;
