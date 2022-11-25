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
    margin: 0 auto;
    margin-bottom: 0.3rem;
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
`;

export { MainContainer };
