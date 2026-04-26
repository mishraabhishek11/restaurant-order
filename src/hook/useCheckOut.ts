import { useEffect, useState } from "react";
import { Meal } from "../type/Meal";
import { CartMealItem } from "../type/CartMealItem";
import { Customer } from "../type/Customer";

export const useCheckOut = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const checkout = async ({
    order,
  }: {
    order: { items: CartMealItem[]; customer: Customer };
  }) => {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    });

    const data = await response.json();

    if (!response.ok) {
      setData("");
      setError(data.message || "Something went wrong");
    }
    setData(data.message);
  };

  const clearCheckOut = () => {
    setData("");
    setError("");
  };

  return { data, error, checkout, clearCheckOut };
};
