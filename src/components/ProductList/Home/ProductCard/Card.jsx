import { Home, Img, CardFormat, Description, Button, Div } from "./cardStyled";

export const CardProduct = (props) => {
  /* const addCart = (product) => {
    
    const cartItems = props.cart;
    console.log(cartItems)
    let amount = props.amount * 1;
    if (props.cart.includes(product)) {
      cartItems.filter((iten) => iten === product)[0].quantidade++;
      props.setCart(cartItems);
    } else {
      product.quantidade = 1;
      cartItems.push(product);
      amount += product.price;
      props.setAmount(amount);
      props.setCart(cartItems);
    }
  }; */

  const addCart = (product) => {
    const novoCart = [...props.cart, product];
  props.setCart(novoCart);
  };

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
            <Div>
              <Description>{product.name}</Description>
            </Div>
            <Div>
              <Description>valor: {product.price}</Description>
            </Div>
            <Div>
              <button onClick={() => addCart(product)}>
                <Button
                  src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
                  alt=""
                />
              </button>
            </Div>
          </CardFormat>
        ))}
    </Home>
  );
};
