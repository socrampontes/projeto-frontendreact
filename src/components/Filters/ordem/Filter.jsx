import { Form, Input, StyledLabel, Orden, ButtonFilter,ButtonClearFilter } from "./ordenStyled";

export const Filters = (props) => {
  const {
    MinFilter,
    MaxFilter,
    SetMinFilter,
    SetMaxFilter,
    HideFilter,
    SetHideFilter,
  } = props;

  const minValueFilter = (e) => {
    SetMinFilter(e.target.value);
  };
  const maxValueFilter = (e) => {
    SetMaxFilter(e.target.value);
  };
  const bntHideFilter = () => {
    SetHideFilter(!HideFilter);
  };
  const bntClearFilter = ()=>{
    SetMaxFilter("");
    SetMinFilter("");
  }

  return (
    <>
    <Orden>
      <div>
        <ButtonFilter onClick={bntHideFilter}>Filtros</ButtonFilter>
      </div>
      <Form style={{ display: HideFilter ? "none" : "block" }}>
        <StyledLabel>Valor mínimo:</StyledLabel>
        <Input
          type="number"
          placeholder="Preço Minimo"
          value={MinFilter}
          onChange={minValueFilter}
        />

        <StyledLabel>Valor máximo:</StyledLabel>
        <Input
          type="number"
          placeholder="Preço Máximo"
          value={MaxFilter}
          onChange={maxValueFilter}
        />
        <ButtonClearFilter onClick={bntClearFilter}>Limpar filtros</ButtonClearFilter>
      </Form>
    </Orden>
    </>
  );
};
