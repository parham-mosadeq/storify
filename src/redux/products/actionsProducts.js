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
    type: 'FAILED',
    payload: error,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsReq());

    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((resp) => {
        const products = resp.data;

        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => {
        const errorMsg = err.massage;

        dispatch(fetchProductsFailed(errorMsg));
      });
  };
};

export { fetchProducts };
