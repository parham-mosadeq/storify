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
        dispatch(fetchProductsFailed(err.massage));
      });
  };
};

export { fetchProducts };
