import axios from 'axios';

const fetchUsersReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: 'SUCCESS',
    payload: users,
  };
};

const fetchUsersFailed = (err) => {
  return {
    type: 'error',
    payload: err,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersReq());
    axios('https://dummyjson.com/users?limit=4')
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => dispatch(fetchUsersFailed(err)));
  };
};

export { fetchUsers };
