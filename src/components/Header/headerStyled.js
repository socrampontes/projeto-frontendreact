import styled from "styled-components";

export const TitleHeader = styled.header`
  background-color: lightskyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100%;
  justify-content: space-around;
`;
export const Logo = styled.img`
  height: 4.7rem;
  
`;
export const SearchName = styled.input`
  flex-basis: 15%;
  height: 2rem;
  border-radius: 1vh;
  border: #ffffff;
  text-align: center;
  font-size: 1rem;
`;
export const OrganizaDiv = styled.div`
  display: flex;
`;
export const Link = styled.a`
  flex-direction: flex-end;
`;

export const Button = styled.button`
  background-color: #87cefa;
  border: #87cefa;
  :active {
    font-size: 2.2rem;
  }
  :hover {
    background-color: lightblue;
    border-radius: 1rem;
  }
  display: flex;
`;

export const ImgCart = styled.img`
  width: 4rem;
`;

export const Counter = styled.p`
  background-color: red;
  color: white;
  width: 1rem;
  border-radius: 3rem;
`;
