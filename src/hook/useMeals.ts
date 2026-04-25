import { useEffect, useState } from "react";
import { Meal } from "../type/Meal";

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch(() => {
        setMeals([]);
      });
  }, []);

  return { meals };
};
