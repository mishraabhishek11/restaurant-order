import React, { createContext, useContext, useState } from "react";
import { CartMealItem } from "../type/CartMealItem";
import { Meal } from "../type/Meal";

const CartContext = createContext<{
  items: CartMealItem[];
  addItemToCart: (item: Meal) => void;
  removeItemFromCart: (productId: string) => void;
  clearCart: () => void;
}>({
  items: [],
  addItemToCart: (item: Meal) => {},
  removeItemFromCart: (productId: string) => {},
  clearCart: () => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shoppingCart, setShoppingCart] = useState<{
    items: CartMealItem[];
  }>({
    items: [],
  });

  function addItemToCart(item: Meal) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        if (item)
          updatedItems.push({
            ...item,
            quantity: 1,
          });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function removeItemFromCart(productId: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity -= 1;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const clearCart = () => {
    setShoppingCart({
      items: [],
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: shoppingCart.items,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
