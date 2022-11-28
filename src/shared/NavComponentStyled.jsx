import styled from 'styled-components';

const MainNavbar = styled.nav`
  background-color: #dcdcdc;
  margin: 0;
  padding: 0;
  ${(menu) => (!menu.showMenu ? 'display:none;' : 'display:block;')}
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 1rem 0;

      a {
        color: #860d0d;
        text-decoration: none;
        padding: 1rem;
        transition: all 0.2s ease;
        text-transform: capitalize;
      }

      a:hover {
        color: blue;
      }
    }
  }

  @media (min-width: 510px) {
    display: block;
    width: 100%;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 740px) {
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;

      li: {
        background-color: none;
      }

      a {
        font-size: 17px;
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
  @media (min-width: 510px) {
    display: none;
  }
`;

export { MainNavbar, MainNavBtn };
