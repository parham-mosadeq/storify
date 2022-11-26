import styled from 'styled-components';

const MainCatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 2rem auto;
`;

const ItemCatContainer = styled.article`
  img {
    display: block;
    width: 30%;
    margin: 0.5rem auto;
  }

  a {
    color: black;
    text-decoration: none;
    letter-spacing: 1.2px;
    font-weight: 400;
  }
`;

const P = styled.p`
  line-height: 1.5;
  font-weight: lighter;
`;

export { P, MainCatContainer, ItemCatContainer };
