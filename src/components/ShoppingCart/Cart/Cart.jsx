import {
  ShoppingCart,
  Form,
  ImgCart,
  CardFormat,
  Description,
  Button,
} from "./CartStyled";
import { Items } from "./Items/Items";

export const Cart = (props) => {
  return (
    <ShoppingCart>
      <ImgCart
        src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
        alt=""
      />
      <Items product={props.cart} 
      setCart={props.setCart}
      />
    </ShoppingCart>
  );
};
