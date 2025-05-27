import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipeSlice, type RecipeSliceType } from './recipeSlice'
// Este archivo define el store de Zustand para la aplicación
//(...a) Es una sintaxis de JavaScript/TypeScript que captura todos los argumentos pasados a la función en un array llamado a
//paso esta función create((...a) a createRecipeSlice(...a) para que use el store de recetas
// ...a toma una copia de todos los argumentos , get, set y api etc. y los pasa a createRecipeSlice
export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))