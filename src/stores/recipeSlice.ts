import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"


//state arribas y acciones abajo
export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter ) => Promise<void>,
    selectRecipe:(id:Drink['idDrink']) => Promise<void>//va a tomar un id de tipo Drink['idDrink'] 

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
    selectedRecipe: {} as Recipe, // Inicialmente vacío, se llenará al seleccionar una receta - as Recipe le dice a TypeScript que este objeto será del tipo Recipe
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
    },
    selectRecipe: async (id) => {
        // Aquí iría la lógica para seleccionar una receta específica
        // Por ejemplo, podrías hacer una llamada a un servicio que obtenga los detalles de una receta
        // y luego actualizar el estado con los detalles de la receta seleccionada.
        //console.log("Seleccionando receta");
        //console.log(id)
        const selectedRecipe = await getRecipeById(id)
        //console.log(selectRecipe)
        set({
            selectedRecipe
        })
    }

})