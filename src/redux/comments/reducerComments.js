const initState = {
  comments: [],
  error: '',
  isLoading: false,
};

const reducerComments = (state = initState, action) => {
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
        comments: action.payload.comments,
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

export default reducerComments;
