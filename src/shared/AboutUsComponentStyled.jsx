import styled from 'styled-components';

const MainAboutUsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  text-align: center;
  position: relative;
  height: 100vh;
  z-index: 100;

  span {
    letter-spacing: 0;
    font-style: italic;
  }

  div:first-child {
    text-transform: capitalize;
    letter-spacing: 1.2px;
    font-weight: 200;
    h1 {
      font-weight: 400;
    }

    p {
      color: #070789;
    }
  }

  div:last-child {
    ul {
      display: flex;
      width: 100%;
      padding: 0;

      li {
        padding: 1rem;
        list-style: none;

        a {
          font-size: 20px;
          color: black;
          transition: color 0.3s linear;
          cursor: pointer;
          z-index: 111;
          ::before {
            content: '';
          }
          :hover {
            color: #070789;
          }
        }
      }
    }
  }

  ::before {
    content: '';
    width: 365px;
    height: 365px;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    opacity: 0.1;
    top: -10px;
    left: 20px;
    z-index: 1;
  }

  ::after {
    content: '';
    width: 265px;
    height: 265px;
    position: absolute;
    background-color: blue;
    border-radius: 50%;
    opacity: 0.2;
    bottom: 10px;
    right: 40px;
    z-index: 2;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    margin-top: 10rem;
  }
`;

export { MainAboutUsContainer };
