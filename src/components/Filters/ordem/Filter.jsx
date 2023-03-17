import { Form, Input, StyledLabel, Orden, ButtonFilter } from "./ordenStyled";

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
  const bntHideFilter=()=>{
    props.setHideFilter(!props.hideFilter)
    }

  return (
    <Orden>
      <div>
      <ButtonFilter onClick={bntHideFilter}>filtros</ButtonFilter>
      </div>
      <Form style={{display: props.hideFilter ? "none" : "block" }}>
        

        <StyledLabel>Valor mínimo:</StyledLabel>
        <Input type="number" placeholder="Preço Minimo" value={props.minFilter}
        onChange={minValueFilter}/>

        <StyledLabel>Valor máximo:</StyledLabel>
        <Input type="number" placeholder="Preço Máximo" value={props.maxFilter}
        onChange={maxValueFilter} />
       
      </Form>
    </Orden>
  );
};
