import {create} from 'zustand'
import { createRecipeSlice } from './recipeSlice'
// Este archivo define el store de Zustand para la aplicación
export const useAppStore = create((...a) => ({
    ...createRecipeSlice(...a)
}))