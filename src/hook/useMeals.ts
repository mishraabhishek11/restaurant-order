import { useEffect, useState } from "react";
import { Meal } from "../type/Meal";

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/meals");
      const data = await response.json();
      if (!response.ok) {
        setMeals([]);
        setError(data.message || "Something went wrong");
      }
      setMeals(data);
    };
    fetchData();
  }, []);

  return { meals, error };
};
