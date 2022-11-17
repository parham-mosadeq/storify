import axios from 'axios';

const fetchProductsReq = () => {
  return {
    type: 'REQUEST',
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: 'SUCCESS_REQ',
    payload: products,
  };
};

const fetchProductsFailed = (error) => {
  return {
    type: 'FAILED_REQ',
    payload: error,
  };
};

// *filters functions start
const lowPrice = (lp, target) => {
  return {
    type: 'LOW_P',
    payload: { lp, target },
  };
};
const highPrice = (hp, target) => {
  return {
    type: 'HIGH_P',
    payload: { hp, target },
  };
};
const menClothing = (mc, target) => {
  return {
    type: 'MEN_CLOTHING',
    payload: { mc, target },
  };
};
const jewelery = (jy, target) => {
  return {
    type: 'JEWLERY',
    payload: { jy, target },
  };
};
const electro = (el, target) => {
  return {
    type: 'ELECTRO',
    payload: { el, target },
  };
};

const women = (wc, target) => {
  return {
    type: 'WOMEN',
    payload: { wc, target },
  };
};

//! filters functions end

// // *buttons handlers start

// const add = (id) => {
//   return {
//     type: 'ADD',
//     payload: id,
//   };
// };

// const minus = (id) => {
//   return {
//     type: 'MINUS',
//     payload: id,
//   };
// };

// const remove = (id) => {
//   return {
//     type: 'REMOVE',
//     payload: id,
//   };
// };

// // !buttons handlers end

// *fetching function
const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsReq());
    axios
      .get('https://fakestoreapi.com/products')
      .then((resp) => {
        const products = resp.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchProductsFailed(err.massage));
      });
  };
};

export {
  fetchProducts,
  women,
  electro,
  jewelery,
  menClothing,
  highPrice,
  lowPrice,
  // remove,
  // add,
  // minus,
};
