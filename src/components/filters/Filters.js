import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import {
  women,
  electro,
  jewelery,
  menClothing,
  highPrice,
  lowPrice,
} from '../../redux/filters/actionsFilters';
import { fetchProducts } from '../../redux/products/actionsProducts';

const Filters = () => {
  const mainArray = useSelector((state) => state.productsState.products);
  const filteredArray = useSelector((state) =>
    console.log(state.filterState.filteredArray)
  );
  const dispatch = useDispatch();

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
          onClick={(e) => {
            dispatch(lowPrice(mainArray));
          }}
          type='checkbox'
        />
      </div>
      {/* cheapest end */}

      {/* highest start */}
      <div>
        <label>high prices</label>
        <input onClick={(e) => highPrice(e.target.checked)} type='checkbox' />
      </div>
      {/* highest end */}

      {/* cat starts */}
      <div>
        <label>men's clothing</label>
        <input onClick={(e) => menClothing(e.target.checked)} type='checkbox' />
      </div>
      <div>
        <label>jewelery</label>
        <input onClick={(e) => jewelery(e.target.checked)} type='checkbox' />
      </div>
      <div>
        <label>electronics</label>
        <input onClick={(e) => electro(e.target.checked)} type='checkbox' />
      </div>
      <div>
        <label>women's clothing</label>
        <input onClick={(e) => women(e.target.checked)} type='checkbox' />
      </div>
      {/* cat end */}
      {/* filters end */}
    </div>
  );
};

export default Filters;
