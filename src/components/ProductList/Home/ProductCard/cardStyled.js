import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  gap: 1rem;
  align-items: center;
`;

export const StyledCard = styled.div``;

export const Img = styled.div``;

export const Description = styled.div`
  margin-left: 4rem;
`;

export const Button = styled.button`
  margin: 1rem 4rem 1rem 4rem;
  height: 1.5vw;
  width: 6vw;
  border-radius: 0.5rem;
  :hover {
    background-color: lightgoldenrodyellow;
  }
  :active {
    font-size: 12px;
  }
`;

export const CardFormat = styled.div`
  display: flex;
  flex-direction: column;
  border: black solid;
  margin-left: 3rem;
`;
