const initState = {
  selectedItemsArray: [],
  itemsCounter: 0,
  quantity: 0,
  total: 0,
  checkout: false,
};

const reducerBtn = (state = initState, action) => {
  switch (action.type) {
    // * buttons start

    case 'ADD':
      if (
        !state.selectedItemsArray.find((item) => item.id === action.payload.id)
      ) {
        state.selectedItemsArray.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        selectedItemsArray: [...state.selectedItemsArray],
      };

    case 'REMOVE':
      const findItemToRemove = state.selectedItemsArray.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        selectedItemsArray: [...findItemToRemove],
      };

    case 'INCREMENT':
      const selectedItemIndex = state.selectedItemsArray.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItemsArray[selectedItemIndex].quantity++;
      return {
        ...state,
      };
    case 'DECREMENT':
      const selectedItemIndexD = state.selectedItemsArray.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedItemsArray[selectedItemIndexD].quantity--;
      // state.selectedItemsArray[selectedItemIndexD].quantity--;
      return {
        ...state,
      };

    case 'CHECKOUT':
      return {
        selectedItemsArray: [],
        itemsCounter: 0,
        quantity: 0,
        total: 0,
        checkout: true,
      };

    case 'CLEAR':
      return {
        selectedItemsArray: [],
        itemsCounter: 0,
        quantity: 0,
        total: 0,
        checkout: false,
      };
    // !buttons end
    default:
      return state;
  }
};

export default reducerBtn;
