const initState = {
  filteredArray: null,
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOW_P':
      const arr = [];
      const filterLowest = action.payload.forEach((ele) => {
        arr.push(ele);
      });
      return {
        ...state,
        filteredArray: arr.sort((a, b) => a.price - b.price),
      };

    default:
      return state;
  }
};

export default filtersReducer;
