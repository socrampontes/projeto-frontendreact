import styled from "styled-components";

export const ShoppingCart = styled.div`
  flex-basis: 20%;
  height: 60vh;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const StyledLabel = styled.label`
  display: flex;
`;

export const ImgCart = styled.img`
  height: 50px;
  width: 70px;
  margin: 1rem 0 0 2rem;
`;

export const Description = styled.p``;
export const Button = styled.button`
  float: right;
  :hover {
    background-color: lightgoldenrodyellow;
  }
  :active {
    font-size: 12px;
  }
  margin-bottom: 3rem;
  display: block;
`;

export const CardFormat = styled.div`
  display: flex;
  border: black solid;
`;
