import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"


//state arribas y acciones abajo
export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter ) => Promise<void>

}

//StateCreator<RecipeSliceType>
//Le dice a TypeScript: "Esta función debe cumplir con la forma de un creador de estado de Zustand"
//Y que el estado que devuelva debe coincidir con RecipeSliceType
//para escribir en el state de Zustand, se usa set
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories:{
        drinks: []
    },
    drinks:{
        drinks: []
    },
    fetchCategories: async() => {
        const categories = await getCategories()
        //console.log(categories)
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        // Aquí iría la lógica para buscar recetas según los filtros
        // Por ejemplo, podrías hacer una llamada a un servicio que busque recetas
        // y luego actualizar el estado con los resultados.
        //console.log("Buscando recetas con los siguientes filtros:", filters);
        const drinks = await getRecipes(filters)
        //console.log(drinks)
        set({
            drinks
        })
    }

})