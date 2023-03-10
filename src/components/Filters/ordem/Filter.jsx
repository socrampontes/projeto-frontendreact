import { Form, Input, StyledLabel, Orden } from "./ordenStyled";

export const Filters = (props) => {
  
  const searchByName =(e)=>{
    props.setSearchFilter(e.target.value)
  }
  const minValueFilter =(e)=>{
    props.setMinFilter(e.target.value)
  }
  const maxValueFilter =(e)=>{
    props.setMaxFilter(e.target.value)
  }

  return (
    <Orden>
      <Form>
        <h3>Filtros</h3>

        <StyledLabel>Valor mínimo:</StyledLabel>
        <Input type="number" placeholder="Preço Minimo" value={props.minFilter}
        onChange={minValueFilter}/>

        <StyledLabel>Valor máximo:</StyledLabel>
        <Input type="number" placeholder="Preço Máximo" value={props.maxFilter}
        onChange={maxValueFilter} />
        <StyledLabel>Pesquisar por item:</StyledLabel>
        <Input
          type="text"
          placeholder="Digite o nome do item"
        value={props.searchFilter}
        onChange={searchByName}
        />
      </Form>
    </Orden>
  );
};
