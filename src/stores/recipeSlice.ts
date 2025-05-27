import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    fetchCategories: () => Promise<void>

}

//StateCreator<RecipeSliceType>
//Le dice a TypeScript: "Esta función debe cumplir con la forma de un creador de estado de Zustand"
//Y que el estado que devuelva debe coincidir con RecipeSliceType
//para escribir en el state de Zustand, se usa set
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories:{
        drinks: []
    },
    fetchCategories: async() => {
        const categories = await getCategories()
        //console.log(categories)
        set({
            categories
        })
    }

})