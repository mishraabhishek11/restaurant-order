import { useMeals } from "../hook/useMeals";
import { Meal } from "../type/Meal";
import MealItem from "./MealItem";

const Meals = () => {
  const { meals } = useMeals();

  return (
    <ul id="meals">
      {meals && meals.length > 0
        ? meals.map((meal: Meal) => <MealItem key={meal.id} meal={meal} />)
        : null}
    </ul>
  );
};

export default Meals;
