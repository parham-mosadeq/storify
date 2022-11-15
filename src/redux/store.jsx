import ProductsReducer from './products/reducersProducts';
import filtersReducer from './filters/reducersFilters';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    filterState: filtersReducer,
  },
  middleware: [thunk, logger],
});

export default store;
