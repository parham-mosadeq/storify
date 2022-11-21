import reducerProducts from './products/reducersProducts';
import reducerBtn from './buttons/reducerBtn';
import reducerComments from './comments/reducerComments';
import reducerCat from './categories/reducerCat';
import reducerUsers from './users/reducerUsers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    productsState: reducerProducts,
    btnState: reducerBtn,
    commentsState: reducerComments,
    categoriesState: reducerCat,
    usersState: reducerUsers,
  },
  middleware: [thunk],
  // middleware: [thunk, logger],
});

export default store;
