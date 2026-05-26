export interface Ingredient {
  value: string;
  name: string;
  img: string;
  price: number;
  masa: number;
  category?: string; 
  img2?:string;
}

export interface IngredientProps{
  name: string,
  options:Ingredient[],
  onChange: (value:string) => void
}