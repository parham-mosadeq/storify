const initState = {
  selectedItemsArray: [],
  itemsCounter: 0,
  likedItems: [],
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = items.reduce((total, product) => {
    return (total + product.selectedItems.price * product.quantity, 0).toFixed(
      2
    );
  });

  return { itemsCounter, total };
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
        ...sumItems(state.selectedItemsArray),
        checkout: false,
      };

    case 'REMOVE':
      const findItemToRemove = state.selectedItemsArray.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        selectedItemsArray: [...findItemToRemove],
        ...sumItems(findItemToRemove),
        checkout: false,
      };

    case 'INCREMENT':
      const selectedItemIndex = state.selectedItemsArray.findIndex(
        (item) => item.id === action.payload
      );
      state.selectedItemsArray[selectedItemIndex].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItemsArray),
        checkout: false,
      };

    case 'DECREMENT':
      const selectedItemIndexD = state.selectedItemsArray.findIndex(
        (item) => item.id === action.payload
      );

      state.selectedItemsArray[selectedItemIndexD].quantity--;
      return {
        ...state,
        checkout: false,
        ...sumItems(state.selectedItemsArray),
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

    case 'FAVE':
      if (!state.likedItems.find((item) => item.id === action.payload.id)) {
        const fave = action.payload.mainState.filter((item) => {
          if (item.id === action.payload.id) {
            state.likedItems.push({ ...item });
          } else {
            return [];
          }
        });
      }
      return {
        ...state,
        likedItems: state.likedItems,
      };

    case 'REMOVE_FAVE':
      const removedFavesArr = [];
      const removedFaves = action.payload.item.filter((item) => {
        console.log(item);
        if (item.id !== action.payload.id) {
          removedFavesArr.push(item);
        } else {
          return [];
        }
      });
      return {
        ...state,
        likedItems: [...removedFavesArr],
      };

    // !buttons end
    default:
      return state;
  }
};

export default reducerBtn;
