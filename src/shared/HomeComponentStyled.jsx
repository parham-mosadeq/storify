import styled from 'styled-components';

const HomeContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  overflow-x: hidden;

  @media (min-width: 510px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 740px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ItemContainer = styled.div`
  padding: 1.4rem 0;
`;

const ImgContainer = styled.div`
  max-width: 100px;
  margin: 1rem auto;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 90%;
    border: 10px;
  }
`;

const LinkContainer = styled.div`
  outline: 1px solid gray;
  padding: 0.3rem;
  transition: outline-offset 0.2s ease-in;
  margin: 0.1rem auto;
  max-width: fit-content;
  :hover {
    outline-offset: 2px;
  }
  a {
    display: block;
    text-transform: capitalize;
    color: black;
    text-decoration: none;
    letter-spacing: 1.1px;
  }
`;

export { ItemContainer, HomeContainer, ImgContainer, LinkContainer };
