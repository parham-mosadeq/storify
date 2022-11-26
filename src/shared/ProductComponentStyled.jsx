import styled from 'styled-components';

const MainDivContainer = styled.article`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProductContainer = styled.div`
  img {
    display: block;
    margin: 1rem auto;
    width: 50%;
  }

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    padding-right: 3rem;
  }

  h3 {
    border-bottom: 1px solid;
    border-radius: 3px;
    width: fit-content;
    margin: 1rem auto;
  }
`;

const Description = styled.p`
  word-wrap: break-word;
  word-break: keep-all;
  line-height: 1.6;
`;

const Price = styled.p`
  background-color: green;
  width: min-content;
  margin: 0 auto;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 1rem;
`;
const Rate = styled.p`
  color: #fff;
  background-color: #bbbb27;
  width: min-content;
  margin: 0 auto;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
const Stock = styled.p`
  color: #fff;
  background-color: blue;
  width: min-content;
  margin: 0 auto;
  padding: 0.2rem 0.4rem;
  border-radius: 8px;
  text-transform: capitalize;
`;

const BtnContainers = styled.div`
  margin: 1rem auto;

  button {
    display: block;
    border-radius: 10px;
    margin: 1rem auto;
    border: none;
    padding: 0.345rem 0.6rem;
    text-transform: uppercase;
    transition: transform 0.2s linear;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :hover {
      transform: scale(0.99);
    }
  }
`;

export {
  Description,
  MainDivContainer,
  ProductContainer,
  Price,
  Rate,
  Stock,
  BtnContainers,
};
