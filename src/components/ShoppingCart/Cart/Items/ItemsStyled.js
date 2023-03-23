import styled from "styled-components";

export const ShoppingCart = styled.div`
display:${props=>props.hideCart ? "none" : "block" };
gap:3rem;
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
`;

export const TagCarrinho = styled.h4`
  display: flex;
`;

export const Img = styled.img`
 
    width: 3rem;
    height: 4rem;
  
`;

export const Description = styled.p``;
export const Button = styled.button`
  height: 1.5vw;

  border-radius: 0.5rem;
  border: black 1px;
  :hover {
    background-color: lightgoldenrodyellow;
  }
  :active {
    font-size: 12px;
  }
`;
export const DivOrganization = styled.div`
  width:14rem;
`;

export const CardFormat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6rem;
  width: 17rem;
  margin-top: 0.3rem;
  border: gray solid 1px;
  border-radius: 1rem;
`;
