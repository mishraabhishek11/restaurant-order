import React, { useActionState } from "react";
import Modal from "../ui/Modal";
import { useCart } from "../../context/CartContext";
import { useModal } from "../../context/ModalContext";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useCheckOut } from "../../hook/useCheckOut";
import Error from "../ui/Error";
import { Customer } from "../../type/Customer";

const CheckOut = () => {
  const { items, clearCart } = useCart();
  const { item, hide } = useModal();

  const { data, error, checkout, clearCheckOut } = useCheckOut();

  const checkoutAction = async (prev, formData) => {
    const customer = Object.fromEntries(formData.entries()) as Customer;

    const errors = [];

    if (customer.name.trim().length === 0) {
      errors.push("provide name");
    }

    if (customer.email.trim().length === 0) {
      errors.push("provide email");
    }

    if (customer.street.trim().length === 0) {
      errors.push("provide street");
    }

    if (customer.city.trim().length === 0) {
      errors.push("provide city");
    }

    if (customer["postal-code"].trim().length === 0) {
      errors.push("provide postal code");
    }

    if (errors && errors.length > 0) {
      return {
        errors,
        values: { ...customer },
      };
    }

    await checkout({ order: { items, customer } });

    return {
      errors: [],
      values: {
        name: "",
        email: "",
        street: "",
        city: "",
        "postal-code": "",
      },
    };
  };

  const [formState, formAction, formPending] = useActionState(checkoutAction, {
    errors: null,
    values: { name: "", email: "", street: "", city: "", "postal-code": "" },
  });

  const cartTotal = items.reduce((q, i) => {
    return q + i.quantity * i.price;
  }, 0);

  if (data.length > 0 && error.length === 0) {
    return (
      <Modal
        className="cart"
        open={item === "checkout"}
        onClose={() => {
          clearCart();
          clearCheckOut();
        }}
      >
        <h2>Submitted Successfully</h2>
        <p>We will get back to you.</p>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={hide}>
            Close
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal className="cart" open={item === "checkout"} onClose={hide}>
      <form action={formAction}>
        <h2>Check Out</h2>
        <p>Total: {cartTotal}</p>

        <Input
          label="Name"
          id="name"
          type="text"
          defaultValue={formState.values.name}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          defaultValue={formState.values.email}
        />
        <Input
          label="Street"
          id="street"
          type="text"
          defaultValue={formState.values.street}
        />
        <div className="control-row">
          <Input
            label="City"
            id="city"
            type="text"
            defaultValue={formState.values.city}
          />
          <Input
            label="Postal Code"
            id="postal-code"
            type="text"
            defaultValue={formState.values["postal-code"]}
          />
        </div>

        {(formState && formState.errors && formState.errors.length > 0) ||
        (error && error.length > 0) ? (
          <Error message={error} />
        ) : null}

        <p className="modal-actions">
          <Button type="button" textOnly onClick={hide}>
            Close
          </Button>
          {items && items.length > 0 ? (
            <Button type="submit" disabled={formPending}>
              {formPending ? "Sunmitting..." : "Submit"}
            </Button>
          ) : null}
        </p>
      </form>
    </Modal>
  );
};

export default CheckOut;
