import React, { useState } from 'react';
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
// styles
import {
  PriceItemsContainer,
  MainContainer,
  LowPriceContainer,
  HighPriceContainer,
  CatItemsContainer,
} from '../../shared/FilterComponentStyled';
const Filters = () => {
  const mainArray = useSelector((state) => state.productsState.products);

  const dispatch = useDispatch();

  const [showPriceFilters, setShowPriceFilters] = useState(false);
  const [showCatFilters, setShowCatFilters] = useState(false);

  return (
    <MainContainer>
      {/* filters start */}

      <>
        <p onClick={() => setShowPriceFilters(!showPriceFilters)}>💸</p>
        <PriceItemsContainer showPriceFilters={showPriceFilters}>
          {/* cheapest start */}

          <LowPriceContainer>
            <label>low prices</label>
            <input
              value='lowPrice'
              name='filters'
              onClick={(e) => {
                dispatch(lowPrice(mainArray, e.target.checked));
              }}
              type='checkbox'
            />
          </LowPriceContainer>
          {/* cheapest end */}
          {/* highest start */}
          <HighPriceContainer>
            <label>high prices</label>

            <input
              value='highPrice'
              name='filtersPrice'
              onClick={(e) => {
                dispatch(highPrice(mainArray, e.target.checked));
              }}
              type='checkbox'
            />
          </HighPriceContainer>
        </PriceItemsContainer>
      </>

      {/* cat starts */}
      <p onClick={() => setShowCatFilters(!showCatFilters)}>👣</p>
      <CatItemsContainer showCatFilters={showCatFilters}>
        <>
          <div>
            <label>men's clothing</label>
            <input
              onClick={(e) =>
                dispatch(menClothing(mainArray, e.target.checked))
              }
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
        </>
      </CatItemsContainer>
      {/* cat end */}
      {/* filters end */}
    </MainContainer>
  );
};

export default Filters;
