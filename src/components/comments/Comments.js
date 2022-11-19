import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// route
import { useNavigate, useLocation } from 'react-router-dom';
// functions
import { shuffle } from '../../services/functions';
const Comments = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const comments = useSelector((state) => state.commentsState.comments);

  const setMaxComment = +loc.pathname.split('/')[2];
  const randomizeMaxNum = Math.ceil(Math.random() * setMaxComment);

  return (
    <div>
      <h1>comments</h1>
      {comments.length > 0
        ? // randomizing comments for better user experience
          shuffle(comments).map((comment, idx) => {
            if (idx < randomizeMaxNum) {
              return (
                <div key={comment.id}>
                  <h5>📖{comment.body}</h5>
                  <p>✍{comment.user.username}</p>
                </div>
              );
            } else {
              return [];
            }
          })
        : null}

      <button onClick={() => nav(`/products/${setMaxComment}`)}>
        back to product
      </button>
    </div>
  );
};

export default Comments;
