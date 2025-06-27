import type { StateCreator} from 'zustand'
import type { Recipe } from '../types'

// Los types
export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe:Recipe) => void, // Acción para manejar el clic en el botón de favorito
    favoriteExists: (id: Recipe['idDrink']) => boolean // Verifica si una receta ya está en favoritos
}

//Su tipo es StateCreator<FavoritesSliceType> significa que es una función que crea un estado compatible con Zustand y sigue la estructura de FavoritesSliceType.
export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set,get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        //console.log("Agregando receta a favoritos:", recipe);
// get().favorites - es la sintaxis para acceder al estado actual de las acciones de este mismo slice  
        //console.log("Recetas favoritas actuales:", get().favorites);
        if(get().favoriteExists(recipe.idDrink)){ // Verifica si la receta ya está en favoritos){
            //console.log('Si existe...')
            set((state) => ({
                //vamos a traernos todos los favoritos que sean diferentes a la receta que estamos pasando como argumento
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink) // Elimina la receta de favoritos si ya existe
            }))
        }else{
            //console.log('No existe...')
            set((state)=>({
                favorites: [...state.favorites, recipe] // Agrega la receta a favoritos si no existe
            }))
        }
    },
    favoriteExists: (id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id) // Verifica si la receta ya está en favoritos
    }
})

//Slice Pattern es un patrón de diseño que se utiliza en Zustand para organizar el estado de la aplicación en "slices" o "rebanadas", cada una con su propia lógica y estado. Esto permite una mejor modularidad y reutilización del código, facilitando la gestión del estado en aplicaciones más grandes y complejas.