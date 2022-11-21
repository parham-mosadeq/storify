const initState = {
  isLoading: false,
  users: [],
  error: '',
};
const reducerUsers = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        ...state,
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        ...state,
        users: action.payload,
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

export default reducerUsers;
