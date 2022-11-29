import styled from 'styled-components';

const BtnContainer = styled.main`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: white;
    border: none;
    border-radius: 50%;
    margin: 1rem;
  }
`;

const AddToCartBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  background-color: blue;
  color: #fff;
  :focus {
    outline: none;
  }
`;
const FaveBtn = styled.button`
  border: none;
  border-radius: 50%;
  text-align: center;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  background-color: orangered;
  color: whitesmoke;
  font-size: 12px;
  :focus {
    outline: none;
  }
`;

const TrashBtn = styled.button`
  border: none;
  border-radius: 50%;
  text-align: center;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  background-color: red;
  color: whitesmoke;
  font-size: 12px;
  :focus {
    outline: none;
  }
`;
const PlusBtn = styled.button`
  border: none;
  border-radius: 50%;
  text-align: center;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  background-color: green;
  color: whitesmoke;
  font-size: 12px;
  :focus {
    outline: none;
  }
`;
const MinusBtn = styled.button`
  border: none;
  border-radius: 50%;
  text-align: center;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  background-color: #8f0000;
  color: whitesmoke;
  font-size: 12px;
  :focus {
    outline: none;
  }
`;

export { MinusBtn, PlusBtn, TrashBtn, BtnContainer, AddToCartBtn, FaveBtn };
