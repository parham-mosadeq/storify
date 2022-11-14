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
    console.log(134);
    dispatch(fetchProductsReq());
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((resp) => {
        dispatch(fetchProductsSuccess(resp.data));
      })
      .catch((err) => {
        const errorMsg = err.massage;

        dispatch(fetchProductsFailed(err.massage));
      });
  };
};

export { fetchProducts };
