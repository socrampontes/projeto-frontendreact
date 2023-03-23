import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Form,
  CardFormat,
  Description,
  Button,
  Img,
  DivOrganization,
} from "./ItemsStyled";
export const Items = (props) => {
  const { Product, SetCart, HideCart } = props;
  const [array, setArray] = useState([]);
  console.log(array)
  let counter = 0;
  for (const obj of Product) {
    if (obj.price > 0) counter += obj.price;
  }

  const removeItem = (product) => {
    const productRemoved = [...Product];
    productRemoved.filter((item) => item === product)[0].quantity--;
    SetCart(productRemoved);
  };

  const cartTotal = Product.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const cart = Product.map((product) =>
    product.quantity > 0 ? (
      <CardFormat key={product.id}>
        <DivOrganization>
          <Description>
            {product.quantity}x {product.name}
          </Description>

          <Description>valor: {(product.price / 1).toFixed(2)}</Description>
          <Button onClick={() => removeItem(product)}>remover</Button>
        </DivOrganization>
        
            <Img src={product.imagemURL} alt={product.name}/>
            
      </CardFormat>
    ) : (
      <div></div>
    )
  );

 /*  useEffect(() => {
    for (let item of Product) {
      setArray(item)
      localStorage.setItem("produtos", JSON.stringify(array));
    }
  }, [Product]); */

   useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(Product));
  }, [Product]); 

  return (
    <>
      <ShoppingCart hideCart={HideCart}>
        <Form>
          <h4>Carrinho </h4>
          <h4>Subtotal: R$ {cartTotal.toFixed(2)}</h4>
        </Form>
        {cart}
      </ShoppingCart>
    </>
  );
};
