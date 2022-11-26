import React from 'react';
// redux
import { useSelector } from 'react-redux';
// route
import { useLocation } from 'react-router-dom';
// functions
import { shuffle } from '../../services/functions';
// styles
import {
  CommentContainer,
  CommentItemContainer,
} from '../../shared/CommentsComponentStyled';

const Comments = () => {
  const loc = useLocation();
  const comments = useSelector((state) => state.commentsState.comments);

  const setMaxComment = +loc.pathname.split('/')[2];
  const randomizeMaxNum = Math.ceil(Math.random() * setMaxComment);
  const shuffled = shuffle(comments);
  return (
    <CommentContainer>
      <h1>comments:</h1>
      {comments
        ? // randomizing comments for better user experience
          shuffled.map((comment, idx) => {
            if (idx < randomizeMaxNum) {
              return (
                <CommentItemContainer key={comment.id}>
                  <h5>📖{comment.body}</h5>
                  <p>✍{comment.user.username}</p>
                </CommentItemContainer>
              );
            } else {
              return [];
            }
          })
        : null}
    </CommentContainer>
  );
};

export default Comments;
