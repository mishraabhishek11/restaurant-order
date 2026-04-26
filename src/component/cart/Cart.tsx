import React from "react";
import Modal from "../ui/Modal";
import { useCart } from "../../context/CartContext";
import { currencyFormatter } from "../../util/formatter";
import { useModal } from "../../context/ModalContext";
import Button from "../ui/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const { item, show, hide } = useModal();
  const cartTotal = items.reduce((q, i) => {
    return q + i.quantity * i.price;
  }, 0);

  return (
    <Modal className="cart" open={item === "cart"}>
      <h2>Your Cart</h2>
      <ul id="cart-items">
        {items && items.length > 0
          ? items.map((item) => <CartItem key={item.id} item={item} />)
          : null}
      </ul>
      <p className="cart-total">
        <strong> {currencyFormatter.format(cartTotal)}</strong>
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={hide}>
          Close
        </Button>
        {items && items.length > 0 ? (
          <Button
            onClick={() => {
              show("checkout");
            }}
          >
            Go to Check Out
          </Button>
        ) : null}
      </p>
    </Modal>
  );
};

export default Cart;
