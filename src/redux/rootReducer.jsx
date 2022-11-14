import { combineReducers } from 'redux';
import ProductsReducer from './products/reducersProducts';
const rootReducers = combineReducers({
  productsState: ProductsReducer,
});

export default rootReducers;
