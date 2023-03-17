import styled from "styled-components";

export const Orden = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis:12%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  margin: 1rem;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const StyledLabel = styled.label`
  display: flex;
`;
export const ButtonFilter = styled.button`
  flex-direction: row;
  margin: 1rem 0 2rem 6rem;
  display: inline-block;
  background-color: #ffffff;
  width: 4rem;
  font-size: 1rem;
  font-weight: bolder;
  border-radius: 1rem;
  border-color: #ffffff;
  :hover {
    background-color: lightgray;
  }
  :active {
    background-color: #ffffff;
  }
`;
