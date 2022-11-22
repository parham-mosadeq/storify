import React from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { removeFave } from '../../redux/buttons/actionsBtn';
// router
import { Link } from 'react-router-dom';
const Favourite = () => {
  const faveItems = useSelector((state) => state.btnState.likedItems);
  const dispatch = useDispatch();
  return (
    <div>
      {faveItems.length ? (
        faveItems.map((item) => {
          return (
            <div key={item.id}>
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
                remove from favourite
              </button>
            </div>
          );
        })
      ) : (
        <h1>your favourite bag is empty :(</h1>
      )}
    </div>
  );
};

export default Favourite;
