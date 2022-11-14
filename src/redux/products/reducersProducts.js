const initState = {
  isLoading: false,
  products: [],
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      console.log('req...');
      return {};
    case 'SUCCESS':
      console.log('suc...');
      return {};
    case 'FAILED':
      console.log('fai...');
      return {};

    default:
      return state;
  }
};

export default ProductsReducer;
