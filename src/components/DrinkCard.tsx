import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"
// este archivo es el componente que se encarga de mostrar una bebida individual
type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe) // Esto es para que se ejecute la función selectRecipe al renderizar el componente, aunque no se use directamente
    return (
      <div className="shadow-lg">
          <div className="overflow-hidden ">
            <img 
                src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`}
                className="hover:scale-105 transition-transform duration-300 rounded-t-lg w-full h-72 object-cover hover:rotate-3"//hover:rotate-3 sirve para rotar una imagen al pasar el ratón por encima 
              />
          </div>
          <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button
              type="button"
              className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg "
              onClick={() => selectRecipe(drink.idDrink)} // Aquí se llama a la función selectRecipe al hacer clic en el botón
            >Ver Receta</button>
          </div>
      </div>
    )
}
