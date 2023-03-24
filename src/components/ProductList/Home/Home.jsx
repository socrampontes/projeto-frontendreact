import { useState } from "react";
import { Orden } from "../../Filters/ordem/ordenStyled";
import {
  HomePage,
  DivOrganization,
  Contador,
  LabelOrdenacao,
  Select,
  Option,
} from "./homePageStyled";
import { CardProduct } from "./ProductCard/Card";
export const Home = (props) => {
  const {
    SearchFilter,
  Product,
  Cart,
  SetCart,
  MaxFilter,
  MinFilter,
  ProductOrdem,
  SetProductOrdem,
  } = props;

  let counter = 0;
  for (let obj of Product) {
    if (obj.price >= 1) counter++;
  }

  const onChangeOrdem = (e) => {
    SetProductOrdem(e.target.value);
  };

  return (
    <>
      <HomePage>
        <DivOrganization>
          <Contador>Quantidade de Itens: {counter}</Contador>
          <div>
            <LabelOrdenacao htmlFor="ordem">Ordenação:</LabelOrdenacao>
            <Select id="ordem" onChange={onChangeOrdem}>
              <Option value="">Ordenação</Option>
              <Option value="decrescente">Decrescente</Option>
              <Option value="crescente">Crescente</Option>
            </Select>
          </div>
        </DivOrganization>
        <CardProduct
          ProductOrdem={ProductOrdem}
          Product={Product}
          SearchFilter={SearchFilter}
          MinFilter={MinFilter}
          MaxFilter={MaxFilter}
          Cart={Cart}
          SetCart={SetCart}
        />
      </HomePage>
    </>
  );
};
