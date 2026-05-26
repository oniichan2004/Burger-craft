import type { IngredientProps } from "../types/burger-types";


export default function IngredientSelect({name, options, onChange}: IngredientProps) {
    return (
        <div>
           <p>{name}</p>
<select title = {name} onChange = {(e)=>onChange(e.target.value)}  className="w-50 border border-gray-300 rounded">
    {options.map(option => (
        <option key = { option.value} value={option.value}>{option.name}</option>
    ))}

</select>


        </div>
    );
}
