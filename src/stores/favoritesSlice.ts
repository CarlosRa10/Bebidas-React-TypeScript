import type { StateCreator} from 'zustand'
import type { Recipe } from '../types'

export type FavoritesSliceType = {
    favorites: Recipe[],
}

//Su tipo es StateCreator<FavoritesSliceType> significa que es una función que crea un estado compatible con Zustand y sigue la estructura de FavoritesSliceType.
export const createFavoritesSlice: StateCreator<FavoritesSliceType> = () => ({
    favorites: [],
})

//Slice Pattern es un patrón de diseño que se utiliza en Zustand para organizar el estado de la aplicación en "slices" o "rebanadas", cada una con su propia lógica y estado. Esto permite una mejor modularidad y reutilización del código, facilitando la gestión del estado en aplicaciones más grandes y complejas.