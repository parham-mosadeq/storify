const initState = {
  isLoading: false,
  products: [],
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case 'FAILED':
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
