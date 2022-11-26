import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: blueviolet;
  width: 100vw;
  max-width: 450px;
  min-height: fit-content;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  h1 {
    color: #ffffff;
    text-transform: capitalize;
  }
`;

const CommentItemContainer = styled.div`
  font-size: 18px;

  h5 {
    color: #f5f5f5ec;
  }

  p {
    font-style: italic;
    font-size: 16px;
    padding-bottom: 1rem;
    display: block;
    text-align: left;
  }
`;

export { CommentContainer, CommentItemContainer };
