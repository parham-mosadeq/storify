import React from 'react';

//redux
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Favourite = () => {
  const faveItems = useSelector((state) => state.btnState.likedItems);
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
            </div>
          );
        })
      ) : (
        <h1>add something to favourite</h1>
      )}
    </div>
  );
};

export default Favourite;
