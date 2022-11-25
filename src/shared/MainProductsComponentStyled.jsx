import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: 1.2px;
    font-style: italic;
    text-align: center;
  }

  @media (min-width: 510px) {
  }
`;

const FiltersContainer = styled.div`
  @media (min-width: 760px) {
  }
`;

const ProductsContainer = styled.article`
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 0.5rem;
  max-width: 300px;
  margin: 0.2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  margin: 0.8rem auto;
  padding: 1rem;
  max-width: 350px;
  max-height: 500px;
`;

export { ProductContainer, MainContainer, FiltersContainer, ProductsContainer };
