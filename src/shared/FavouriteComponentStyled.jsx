import styled from 'styled-components';

const MainFavContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 4rem auto;

  h1 {
    text-align: center;
    display: block;
    text-transform: capitalize;
    font-weight: lighter;
  }

  img {
    display: block;
    width: 20%;
    margin: 1rem auto;
  }
  /* general links styles */
  a {
    text-decoration: none;
    text-align: center;
  }

  a:nth-child(1) {
    color: black;
  }

  a:nth-child(2) {
    color: green;
  }

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
    align-items: center;
    margin: 2rem;
  }
  @media (min-width: 1170px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
    align-items: center;
    margin: 2rem;
  }
`;

const FaveItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  max-width: 450px;
  margin: 1rem auto;
  border-radius: 10px;

  button {
    cursor: pointer;
    border: none;
    background-color: orangered;
    border-top-left-radius: 10px;
    border-top-right-radius: 4px;

    color: #fff;

    :focus {
      outline: none;
    }
  }

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export { MainFavContainer, FaveItemContainer };
