import axios from 'axios';

const fetchCommentsReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchCommentsSuccess = (comments) => {
  return {
    type: 'SUCCESS',
    payload: comments,
  };
};

const fetchCommentsFailed = (error) => {
  return {
    type: 'FAILED',
    payload: error,
  };
};

const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsReq());

    axios('https://dummyjson.com/comments')
      .then((res) => {
        const comments = res.data;
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch((err) => dispatch(fetchCommentsFailed(err)));
  };
};

export { fetchComments };
