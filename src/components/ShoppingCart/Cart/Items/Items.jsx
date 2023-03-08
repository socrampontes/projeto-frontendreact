import {
    ShoppingCart,
    Form,
    ImgCart,
    CardFormat,
    Description,
    Button,
  } from "./ItemsStyled";
  export const Items = (props) => {

let counter = 0;
for (const obj of props.product) {
  if (obj.price > 0) counter+= obj.price;
}


    const mostraLista = props.product.map((c, i) => (
      <CardFormat>
        <Description> nome: {c.name}</Description>

        <Description>valor: {c.price}</Description>
        <Button>remover</Button>
        
      </CardFormat>
        
    ));

  return (
    <ShoppingCart>
      
      <Form>
        <h2>Carrinho : {mostraLista}</h2>

        <h4>
          Valor total:
          {counter}
        </h4>
      </Form>
    </ShoppingCart>
  );
};
