import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import {
  women,
  electro,
  jewelery,
  menClothing,
  highPrice,
  lowPrice,
} from '../../redux/products/actionsProducts';
import { fetchProducts } from '../../redux/products/actionsProducts';

const Filters = () => {
  const mainArray = useSelector((state) => state.productsState.products);

  const dispatch = useDispatch();

  const [isPrice, setIsPrice] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {/* filters start */}

      {/* cheapest start */}
      <div>
        <label>low prices</label>
        <input
          value='lowPrice'
          name='filters'
          onClick={(e) => {
            dispatch(lowPrice(mainArray, e.target.checked));
          }}
          type='checkbox'
        />
      </div>
      {/* cheapest end */}

      {/* highest start */}
      <div>
        <label>high prices</label>

        <input
          value='highPrice'
          name='filtersPrice'
          onClick={(e) => {
            setIsPrice(false);
            dispatch(highPrice(mainArray, e.target.checked));
          }}
          type='checkbox'
        />
      </div>
      {/* highest end */}

      {/* cat starts */}
      <div>
        <label>men's clothing</label>
        <input
          onClick={(e) => dispatch(menClothing(mainArray, e.target.checked))}
          name='filtersPrice'
          type='checkbox'
          value='menClothing'
        />
      </div>
      <div>
        <label>jewelery</label>
        <input
          value='jewlery'
          name='filters'
          onClick={(e) => dispatch(jewelery(mainArray, e.target.checked))}
          type='checkbox'
        />
      </div>
      <div>
        <label>electronics</label>
        <input
          onClick={(e) => dispatch(electro(mainArray, e.target.checked))}
          name='filters'
          type='checkbox'
          value='electronics'
        />
      </div>
      <div>
        <label>women's clothing</label>
        <input
          onClick={(e) => dispatch(women(mainArray, e.target.checked))}
          name='filters'
          type='checkbox'
          value='womenClothing'
        />
      </div>
      {/* cat end */}
      {/* filters end */}
    </div>
  );
};

export default Filters;
