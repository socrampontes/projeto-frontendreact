import { ShoppingCart } from "./CartStyled";
import { Items } from "./Items/Items";

export const Cart = (props) => {
  const {Cart, SetAmount, SetCart, HideCart } = props;
  return (
    <>
      <ShoppingCart>
        <Items
          Product={Cart}
          SetCart={SetCart}
          SetAmount={SetAmount}
          HideCart={HideCart}
        />
      </ShoppingCart>
    </>
  );
};
