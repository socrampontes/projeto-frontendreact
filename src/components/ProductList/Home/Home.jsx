import { useState } from "react";
import {
  HomePage,
  Contador,
  LabelOrdenacao,
  Select,
  Option,
  DivOrganization,
} from "./homePageStyled";
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
      <Contador>Quantidade de Itens: {counter}</Contador>
      <DivOrganization>
        <LabelOrdenacao htmlFor="ordem">Ordenação:</LabelOrdenacao>
        <Select id="ordem" onChange={onChangeOrdem}>
          <Option value="">Ordenação</Option>
          <Option value="decrescente">Decrescente</Option>
          <Option value="crescente">Crescente</Option>
        </Select>
      </DivOrganization>
      <CardProduct
        product={props.product}
        productOrdem={productOrdem}
        searchFilter={props.searchFilter}
        minFilter={props.minFilter}
        maxFilter={props.maxFilter}
        cart={props.cart}
        setCart={props.setCart}
        amount={props.amount}
        setAmount={props.setAmount}
      />
    </HomePage>
  );
};
