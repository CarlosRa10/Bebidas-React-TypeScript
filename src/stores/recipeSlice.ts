import type { StateCreator } from "zustand"

type Category = {}

export type RecipeSliceType = {
    categories: Category[]
}

//StateCreator<RecipeSliceType>
//Le dice a TypeScript: "Esta función debe cumplir con la forma de un creador de estado de Zustand"
//Y que el estado que devuelva debe coincidir con RecipeSliceType
export const createRecipeSlice : StateCreator<RecipeSliceType> = () => ({
    categories:[]
})