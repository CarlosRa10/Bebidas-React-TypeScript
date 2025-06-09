import type { Drink } from "../types"
// este archivo es el componente que se encarga de mostrar una bebida individual
type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {
  return (
    <div>
        <h2>{drink.strDrink}</h2>
    </div>
  )
}
