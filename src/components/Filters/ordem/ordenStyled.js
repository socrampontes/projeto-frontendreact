import styled from "styled-components";

export const Orden = styled.section`
height:60vh;
  flex-basis: 15%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border-right: black solid 1px;
  border-bottom:none;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const StyledLabel = styled.label`
  display: flex;
`;
