import { useState } from "react";
import type { Ingredient } from "../types/burger-types";
import { defaultSelects } from "../data/burger-data";
import IngredientSelect from "./ingredient-select";

export default function Burger() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([
    {
      ...defaultSelects[0].options[0],
      category: defaultSelects[0].name,
    },
    {
      ...defaultSelects[1].options[0],
      category: defaultSelects[1].name,
    },
  ]);
  const bun = selectedIngredients.find(
    (ingredient) => ingredient.category === "Chifla",
  );

  const middleIngredients = selectedIngredients.filter(
    (ingredient) => ingredient.category !== "Chifla",
  );
  return (
    <div className="flex  justify-between p-20 bg-emerald-500 h-screen">
    
    <div className=" flex flex-col gap-4  ">
      {defaultSelects.map((select) => (
        <IngredientSelect
          key={select.name}
          name={select.name}
          options={select.options}
          onChange={(value) => {
            const selectedOption = select.options.find(
              (option) => option.value === value,
            );
            console.log(selectedOption);

            if (!selectedOption) return;
            setSelectedIngredients((prev) => {
              const notSameCategory = prev.filter(
                (ingredient) => ingredient.category !== select.name,
              );
              return [
                ...notSameCategory,
                { ...selectedOption, category: select.name },
              ];
            });
          }}
        />
      ))}
      <div>
        {selectedIngredients.map((ingredient) => (
          <p key={ingredient.value}> {ingredient.name} - {ingredient.price} TL</p>
        ))}
      </div>
      </div>

      
<div  className="w-1/2">
      <div >
        {bun?.img2 && <img className="w-70" src={bun.img2} alt={bun.name} />}

        {middleIngredients.map((ingredient) => (
          <img
            className="w-70"
            key={ingredient.value}
            src={ingredient.img}
            alt={ingredient.name}
          />
        ))}

        {bun && <img className=" w-70" src={bun.img} alt={bun.name} />}
      </div>
    </div>
    
    </div>  
  );
}

