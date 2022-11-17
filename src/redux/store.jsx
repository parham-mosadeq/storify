import ProductsReducer from './products/reducersProducts';
import reducerBtn from './buttons/reducerBtn';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    productsState: ProductsReducer,
    btnState: reducerBtn,
  },
  middleware: [thunk],
  // middleware: [thunk, logger],
});

export default store;
