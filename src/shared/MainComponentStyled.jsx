import styled from 'styled-components';

const MainNavbar = styled.nav`
  background-color: #e9e5e553;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 11;
  /* visibility: hidden; */
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    li {
      margin: 1rem 0;
      padding: 0 1rem 0;

      a {
        color: black;
        text-decoration: none;
        cursor: pointer;
        text-transform: capitalize;
        transition: all 0.2s ease;
      }
      a:hover {
        color: #111;
        padding-left: 4px;
      }
    }
  }

  @media (min-width: 501px) {
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    background-color: #e9e5e5;
    ul {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      li {
        a:hover {
          padding-left: 0;
        }
      }
    }
  }
`;

const MainNavBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  z-index: 100;
  cursor: pointer;
  border: 0;
  color: #0095ff;
  background-color: transparent;
  font-size: large;
  @media (min-width: 501px) {
    display: none;
  }
`;
export { MainNavbar, MainNavBtn };
