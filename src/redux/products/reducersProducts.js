const initState = {
  isLoading: false,
  products: [],
  error: '',
  lowPrice: false,
  highPrice: false,
  selectedArrays: [],
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
        // will assign to main products array late to
        // prevent fetching data from api again
        sideProductsArray: action.payload,
      };
    case 'FAILED_REQ':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // filters start
    case 'LOW_P':
      // checking to see if low price was selected or not
      if (action.payload.target) {
        const lowPriceArray = [];
        const filterLowest = action.payload.lp.forEach((ele) => {
          lowPriceArray.push(ele);
        });

        console.log(action.payload.target);

        return {
          ...state,
          products: lowPriceArray.sort((a, b) => a.price - b.price),
          lowPrice: action.payload.target,
        };
      } else {
        return {
          ...state,
          // setting the side products array as main array
          products: state.sideProductsArray,
          isLoading: false,
          lowPrice: false,
        };
      }

    case 'HIGH_P':
      // checking to see if high price was selected or not
      if (action.payload.target) {
        const highestPriceArray = [];
        const filterHighestPrice = action.payload.hp.forEach((item) => {
          return highestPriceArray.push(item);
        });

        return {
          ...state,
          products: highestPriceArray.sort((a, b) => b.price - a.price),
          isLoading: false,
          highPrice: action.payload.target,
          lowPrice: false,
        };
      } else {
        return {
          ...state,
          // setting the side products array as main array
          products: state.sideProductsArray,
          isLoading: false,
        };
      }

    case 'MEN_CLOTHING':
      if (action.payload.target) {
        const menClothingArray = [];
        // action.payload.mc.forEach()

        action.payload.mc.filter((item) => {
          if (item.category === "men's clothing") {
            return menClothingArray.push(item);
          } else {
            return [];
          }
        });
        return {
          ...state,
          isLoading: false,
          products: menClothingArray,
        };
      } else {
        return {
          ...state,
          products: state.sideProductsArray,
          isLoading: false,
        };
      }

    case 'JEWLERY':
      if (action.payload.target) {
        const jewleryArray = [];
        action.payload.jy.filter((item) => {
          if (item.category === 'jewelery') {
            return jewleryArray.push(item);
          } else {
            return [];
          }
        });
        return {
          ...state,
          isLoading: false,
          products: jewleryArray,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          products: state.sideProductsArray,
        };
      }

    case 'ELECTRO':
      if (action.payload.target) {
        const electronicsArray = [];
        action.payload.el.forEach((item) => {
          if (item.category === 'electronics') {
            electronicsArray.push(item);
          } else {
            return [];
          }
        });

        return {
          ...state,
          isLoading: false,
          products: electronicsArray,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          products: state.sideProductsArray,
        };
      }

    case 'WOMEN':
      if (action.payload.target) {
        const womenClothingArray = [];
        action.payload.wc.forEach((item) => {
          if (item.category === "women's clothing") {
            womenClothingArray.push(item);
          } else {
            return [];
          }
        });

        return {
          ...state,
          isLoading: false,
          products: womenClothingArray,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          products: state.sideProductsArray,
        };
      }

    //! filters end

    default:
      return state;
  }
};

export default ProductsReducer;
