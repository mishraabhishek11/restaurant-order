import { useCart } from "../../context/CartContext";
import { CartMealItem } from "../../type/CartMealItem";
import { currencyFormatter } from "../../util/formatter";
import Button from "../ui/Button";

const CartItem = ({ item }: { item: CartMealItem }) => {
  const { addItemToCart, removeItemFromCart } = useCart();
  const { id, name, price, quantity } = item;
  return (
    <li key={id} className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <Button
          onClick={() => {
            removeItemFromCart(item.id);
          }}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={() => {
            addItemToCart(item);
          }}
        >
          +
        </Button>
      </p>
    </li>
  );
};

export default CartItem;
