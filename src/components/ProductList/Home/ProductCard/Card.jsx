import {
  Home,
  StyledCard,
  Img,
  CardFormat,
  Description,
  Button,
} from "./cardStyled";

export const CardProduct = (props) => {
  return (
    <Home>
      {props.product
        .filter((product) => {
          if (props.searchFilter) {
            return product.name
              .toLowerCase()
              .includes(props.searchFilter.toLowerCase());
          } else {
            return props.product;
          }
        })
        .filter((item) =>
          props.maxFilter ? item.price <= props.maxFilter : item
        )
        .filter((item) =>
          props.minFilter ? item.price >= props.minFilter : item
        )


        .sort((a, b) => {
          if (props.productOrdem === "crescente") {
            return a.price - b.price;
          }
          if (props.productOrdem === "decrescente") {
            return b.price - a.price;
          }
        })
        .map((product) => (
          <CardFormat key={product.id}>
            <Img>{product.imagemURL}</Img>

            <Description> nome: {product.name}</Description>

            <Description>valor: {product.price}</Description>
            

            <Button>Adicionar</Button>
          </CardFormat>
        ))}
    </Home>
  );
};
