import {
  ShoppingCart,
  Form,
  
  CardFormat,
  Description,
  Button,
  
} from "./ItemsStyled";
export const Items = (props) => {
  let counter = 0;
  for (const obj of props.product) {
    if (obj.price > 0) counter += obj.price;
  }

  const removeitem = (product) => {
    const productRemoved = props.product.filter((item) => item !== product);
    props.setCart([...props.product, product]);
    props.setCart(productRemoved);
  };
  const cart = props.product.map((product) => (
    <CardFormat key={product.id}>
      <Description> nome: {product.name}</Description>

      <Description>valor: {product.price}</Description>
      <Button onClick={() => removeitem(product)}>remover</Button>
    </CardFormat>
  ));
  

  return (
    <ShoppingCart style={{display: props.hideCart ? "none" : "block" }} >
      <Form>
        <div>Carrinho : {cart}</div>

        <h4>
          Valor total:
          {counter}
        </h4>
      </Form>
    </ShoppingCart>
  );
};
