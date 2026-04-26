import React, { createContext, useContext, useState } from "react";
import { CartMealItem } from "../type/CartMealItem";
import { Meal } from "../type/Meal";

const ModalContext = createContext<{
  item: "" | "cart" | "checkout";
  show: (id: "" | "cart" | "checkout") => void;
  hide: () => void;
}>({
  item: "",
  show: (id: "" | "cart" | "checkout") => {},
  hide: () => {},
});

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [item, setItem] = useState<"" | "cart" | "checkout">("");

  function show(id: "" | "cart" | "checkout") {
    setItem(id);
  }

  return (
    <ModalContext.Provider
      value={{
        item,
        show,
        hide: () => {
          setItem("");
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
