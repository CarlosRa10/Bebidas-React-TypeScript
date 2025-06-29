import type { StateCreator} from 'zustand'
import type { Recipe } from '../types'
import { createRecipeSlice, type RecipeSliceType } from './recipeSlice'
//import { getState } from "./useAppStore";

// Los types
export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe:Recipe) => void, // Acción para manejar el clic en el botón de favorito
    favoriteExists: (id: Recipe['idDrink']) => boolean // Verifica si una receta ya está en favoritos
}

//Su tipo es StateCreator<FavoritesSliceType> significa que es una función que crea un estado compatible con Zustand y sigue la estructura de FavoritesSliceType.
//FavoritesSliceType & RecipeSliceType:Indica que este slice puede acceder no solo a su propio estado (FavoritesSliceType), sino también al estado de RecipeSliceType.
//Esto es necesario porque más adelante se llama a createRecipeSlice(...).closeModal(), que pertenece a otro slice.
//FavoritesSliceType (último parámetro): Define el tipo del objeto que retorna esta función (el slice actual).
export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType,[],[],FavoritesSliceType> = (set,get,api) => ({
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
        createRecipeSlice(set,get,api).closeModal()
        //getState().closeModal(); //Aqui se "consume" el estado y se usa el closeModal - codigo para evitar createRecipeSlice
    },
    favoriteExists: (id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id) // Verifica si la receta ya está en favoritos
    }
})

//Slice Pattern es un patrón de diseño que se utiliza en Zustand para organizar el estado de la aplicación en "slices" o "rebanadas", cada una con su propia lógica y estado. Esto permite una mejor modularidad y reutilización del código, facilitando la gestión del estado en aplicaciones más grandes y complejas.