import ProductsReducer from './products/reducersProducts';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    productsState: ProductsReducer,
  },
  middleware: [thunk, logger],
});

export default store;
