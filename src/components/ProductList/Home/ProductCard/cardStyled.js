import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;

  margin: 3rem 0 1rem 1.5rem;
`;

export const StyledCard = styled.div`
  width: 15vw;
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 17rem;
    height: 22rem;
  }
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Description = styled.div``;

export const CardFormat = styled.div`
  width: 20vw;
  height: 50vh;
`;

export const Button = styled.img`
  width: 3vw;
  margin-top: 1rem;
  :hover {
    width: 3.2vw;
  }
  :active {
    width: 2.8vw;
  }
`;
