import styled from "styled-components";

export const Orden = styled.section`
display:flex;
flex-direction:column;
height:60vh;
  flex-basis: 15%;
  flex-grow: 1;
 `;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width:60%;
  margin-left:2rem;

`;

export const Input = styled.input`
  padding: 8px;
`;

export const StyledLabel = styled.label`
  display: flex;
`;
export const ButtonFilter = styled.button`
flex-direction:row;

margin-left:3rem;
display:inline-block;
background-color:#FFFFFF;
width:4rem;
font-size:1rem;
font-weight:bolder;
border-radius:1rem;
border-color: #FFFFFF;
:hover{
  background-color:lightgray;
}
:active{
  background-color:#FFFFFF;
}
` 
