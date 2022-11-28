import styled from 'styled-components';

const MainCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: whitesmoke;
  min-height: 100vh;
  button {
    display: block;
    border: none;
    border-radius: 12px;
    margin: 0.25rem auto;
    background-color: blue;
    color: #fff;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
    transition: background 0.3s ease-in;
    :focus {
      outline: none;
    }
    :hover {
      background-color: #2626f6b7;
    }
  }
`;

const P = styled.p`
  text-align: center;
  margin-top: 4rem;
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 1.1px;
  outline: 1px solid black;
  padding: 0.25rem 0.5rem;
  margin-bottom: -1rem;
  background-color: #e8e6e63b;
  transition: all 0.2s ease;
  :hover {
    outline-offset: 1px;
  }
`;

const Wrapper = styled.article`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ItemCartContainer = styled.div`
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  max-width: 350px;
  border-radius: 10px;
  padding: 1rem;
  margin: 3rem auto;
  transition: box-shadow 0.2s linear;
  :hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.45);
  }

  img {
    display: block;
    width: 20%;
    height: 50%;
    margin: 1rem auto;
  }
`;

const ItemCartInfoContainer = styled.div`
  p {
    font-weight: lighter;
    letter-spacing: 1px;
    word-break: break-all;
  }
  span {
    text-transform: capitalize;
    font-size: 16px;
    padding: 0.23rem 0.5rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #3636f8;
  }
`;

export {
  MainCartContainer,
  P,
  Wrapper,
  ItemCartInfoContainer,
  ItemCartContainer,
};
