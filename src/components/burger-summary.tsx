import type { Ingredient } from "../types/burger-types";

interface BurgerSummaryProps {
  ingredients: Ingredient[];
}

export default function BurgerSummary({ ingredients }: BurgerSummaryProps) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.value} className="flex items-center gap-2">
          <img src={ngredient.img} alt={ingredient.name} />
          <span>{ingredient.name}</span>
        </div>
      ))}
    </div>
  );
}
