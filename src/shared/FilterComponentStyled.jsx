import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 2rem 0.3rem;

  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    cursor: pointer;
    display: block;
    width: 50px;
    margin: 0.1rem auto;
    background-color: darkgray;
    padding: 5px 20px;
    border-radius: 10px;
  }

  @media (min-width: 510px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    p {
      display: none;
    }
  }
`;

const PriceItemsContainer = styled.div`
  text-transform: capitalize;
  letter-spacing: 1.1px;
  color: #760bc7;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  background-color: lightgray;
  border-radius: 8px;
  ${(props) => (props.showPriceFilters ? 'display:none;' : 'display:flex;')}
  @media (min-width: 510px) {
    display: block;
    background-color: transparent;
  }
`;
const LowPriceContainer = styled.div`
  input {
    cursor: pointer;
  }
`;
const HighPriceContainer = styled.div`
  input {
    cursor: pointer;
  }
`;
//
const CatItemsContainer = styled.div`
  text-transform: capitalize;
  letter-spacing: 1.1px;
  color: #0b0bff;
  margin: 1rem 0;
  height: 89px;
  max-width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0;
  overflow-x: hidden;
  align-items: center;
  background-color: lightgray;
  border-radius: 8px;

  input {
    cursor: pointer;
  }

  ${(props) => (props.showCatFilters ? 'display:none;' : 'display:flex;')}
  @media (min-width: 510px) {
    display: block;
    background-color: transparent;
  }
`;
export {
  CatItemsContainer,
  PriceItemsContainer,
  MainContainer,
  LowPriceContainer,
  HighPriceContainer,
};
