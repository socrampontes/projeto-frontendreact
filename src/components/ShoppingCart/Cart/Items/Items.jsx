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

const removeitem = (product) => {
  const productRemoved = props.cart.filter((item) => {
    if (item !== product){
      props.setCart(props.cart.splice(product, 1))
    }
    } );

  props.setCart(productRemoved);
  };

    const cart = props.product.map((product) => (
      <CardFormat key={product.id}>
        <Description> nome: {product.name}</Description>

        <Description>valor: {product.price}</Description>
        <Button onClick={()=>removeitem(product)}>remover</Button>
        
      </CardFormat>
        
    ));

  return (
    <ShoppingCart>
      
      <Form>
        <h2>Carrinho : {cart}</h2>

        <h4>
          Valor total:
          {counter}
        </h4>
      </Form>
    </ShoppingCart>
  );
};
