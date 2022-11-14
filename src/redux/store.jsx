import ProductsReducer from './products/reducersProducts';

import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
const store = configureStore({
  reducer: {
    productsState: ProductsReducer,
  },
  middleware: [logger],
});

export default store;
