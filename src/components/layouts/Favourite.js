import React from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Favourite = () => {
  const faveItems = useSelector((state) => state.btnState.likedItems);
  console.log(faveItems);
  return (
    <div>
      {faveItems.length > 0
        ? faveItems.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img width={50} src={item.image} alt={item.title} />
                </div>
                <div>
                  <h4>
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                  </h4>
                  <Link to={`/categories/${item.category}`}>
                    {item.category}
                  </Link>

                  <p>{item.price}$</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Favourite;
