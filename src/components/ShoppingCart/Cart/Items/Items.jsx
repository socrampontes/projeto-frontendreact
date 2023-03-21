import {
  ShoppingCart,
  Form,
  CardFormat,
  Description,
  Button,
  ImagemCart,
  DivOrganization,
} from "./ItemsStyled";
export const Items = (props) => {
  const { Product, SetCart, HideCart } = props;

  let counter = 0;
  for (const obj of Product) {
    if (obj.price > 0) counter += obj.price;
  }

  const removeItem = (product) => {
    const productRemoved = [...Product];
    productRemoved.filter((item) => item === product)[0].quantidade--;
    SetCart(productRemoved);
  };

  const cartTotal = Product.reduce((total, product) => {
    return total + product.price * product.quantidade;
  }, 0);

  const cart = Product.map((product) =>
    product.quantidade > 0 ? (
      <CardFormat key={product.id}>
        <DivOrganization>
          <Description>
            {product.quantidade}x {product.name}
          </Description>

          <Description>valor: {(product.price / 1).toFixed(2)}</Description>
          <Button onClick={() => removeItem(product)}>remover</Button>
        </DivOrganization>
        <ImagemCart>{product.imagemURL}</ImagemCart>
      </CardFormat> 
    ) : (
      <div></div>
    )
  );

  return (
    <>
      <ShoppingCart style={{ display: HideCart ? "none" : "block" }}>
        <Form>
          <h4>Carrinho   </h4>
          <h4>Subtotal: R$ {cartTotal.toFixed(2)}</h4>
        </Form>
          {cart}
      </ShoppingCart>
    </>
  );
};
