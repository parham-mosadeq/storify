import axios from 'axios';

const fetchCatReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchCatSuccess = (categories) => {
  return {
    type: 'SUCCESS',
    payload: categories,
  };
};

const fetchCatFailed = (error) => {
  return {
    type: 'FAILED',
    payload: error,
  };
};

const fetchCat = () => {
  return (dispatch) => {
    dispatch(fetchCatReq());

    axios('https://fakestoreapi.com/products/categories')
      .then((res) => {
        const categories = res.data;
        dispatch(fetchCatSuccess(categories));
      })
      .catch((err) => fetchCatFailed(err.message));
  };
};

export { fetchCat };
