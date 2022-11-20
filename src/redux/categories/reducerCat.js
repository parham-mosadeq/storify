const initState = {
  isLoading: false,
  categories: [],
  error: '',
};

const reducerCat = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        ...state,
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };

    case 'FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducerCat;
