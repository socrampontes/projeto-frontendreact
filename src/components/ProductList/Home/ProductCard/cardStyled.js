import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledCard = styled.div``;

export const Img = styled.img`
  width: 17rem;
  height: 22rem;
`;
export const Div = styled.div``;

export const Description = styled.div``;

export const CardFormat = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 20rem;
  height: 26rem;
`;

export const ImgButton = styled.img`
  width: 3rem;
`;

export const Button = styled.button`
  align-self: center;
  background-color: #ffffff;
  border: #ffffff;
  :hover {
    background-color: lightblue;
    border-radius: 2rem;
  }
  :active {
    font-size: 2.2rem;
  }
`;
