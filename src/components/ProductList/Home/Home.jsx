import { useState } from "react";
import { HomePage, Contador } from "./homePageStyled";
import { CardProduct } from "./ProductCard/Card";
export const Home = (props) => {
  const [productOrdem, setProductOrdem] = useState("");

  let counter = 0;
  for (let obj of props.product) {
    if (obj.quantidade === 1) counter++;
  }

  const onChangeOrdem = (e) => {
    setProductOrdem(e.target.value);
  };

  return (
    <HomePage>
      <Contador>quantidade de produtos : {counter}</Contador>
      <label htmlFor="">Ordenação:</label>
      <select onChange={onChangeOrdem}>
        <option value="">Ordenação</option>
        <option value="decrescente">Decrescente</option>
        <option value="crescente">Crescente</option>
      </select>

      <CardProduct product={props.product} productOrdem={productOrdem} searchFilter={props.searchFilter} minFilter={props.minFilter}
      maxFilter={props.maxFilter}/>
    </HomePage>
  );
};
