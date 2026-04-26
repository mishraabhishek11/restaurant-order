import logo from "../assets/logo.jpg";
import { useCart } from "../context/CartContext";
import { useModal } from "../context/ModalContext";
import Button from "./ui/Button";

function Header() {
  const { items } = useCart();
  const { show } = useModal();

  const itemQuantity = items.reduce((q, i) => {
    return q + i.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1 id="title">Restaurant Order</h1>
      </div>
      <p>
        <Button
          textOnly
          onClick={() => {
            show("cart");
          }}
        >
          Cart ({itemQuantity})
        </Button>
      </p>
    </header>
  );
}

export default Header;
