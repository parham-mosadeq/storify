import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 1rem auto;
  border-bottom: 1px solid;
  padding-bottom: 0.4rem;
  display: block;
  max-width: 300px;
  text-align: center;
  border-radius: 2px;

  img {
    display: block;
    margin: 1rem auto;
  }

  p {
    text-transform: capitalize;
  }

  a {
    color: gray;
    text-decoration: none;
    letter-spacing: 1.1px;
    transition: color 0.3s ease;
    :hover {
      color: black;
    }
  }

  article {
    background-color: #a7a7a727;
    padding: 0.4rem 0.8rem;
    margin: 0.6rem 0.1rem;
    border-radius: 10px;
    div:last-child {
      border-radius: 8px;
      background-color: gray;
      padding: 3px 7px;
      width: max-content;
      margin: 0 auto;
    }
  }
`;

export { MainContainer };
