import {
  ShoppingCart,
  
} from "./CartStyled";
import { Items } from "./Items/Items";

export const Cart = (props) => {
  return (
    <ShoppingCart>
      <Items
        product={props.cart}
        setCart={props.setCart}
        setAmount={props.setAmount}
        amount={props.amount}
        hideCart={props.hideCart}
      />
    </ShoppingCart>
  );
};
