const initState = {
  isLoading: false,
  products: [],
  error: '',
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS_REQ':
      return {
        isLoading: false,
        products: action.payload,
      };
    case 'FAILED_REQ':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
