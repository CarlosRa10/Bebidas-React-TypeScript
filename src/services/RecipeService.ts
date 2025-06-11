import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import type { Drink, SearchFilter } from "../types"

//Archivo que se encarga de los servicios que solicitas

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios.get(url)
    //console.log(data)
    //Hay que validar que la respuesta de la API sea correcta pasando mi Schema
    const result = CategoriesAPIResponseSchema.safeParse(data)//safeParse es un método de Zod que valida el objeto contra el esquema y devuelve un objeto con éxito o error
    //console.log(result)
    if (result.success){
        //Si la validación es exitosa, devuelvo el array de categorías
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter){
    //console.log("Buscando recetas con los siguientes filtros:", filters);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios.get(url)
    //console.log(data)
    const result = DrinksAPIResponse.safeParse(data) //Validamos la respuesta de la API con el esquema DrinksAPIResponse
    //console.log(result)
    if (result.success){
        //Si la validación es exitosa, devuelvo el array de recetas
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios.get(url)
    //console.log(data)
    //Validamos la respuesta de la API con el esquema DrinksAPIResponse
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]) //safeParse valida el objeto contra el esquema y devuelve un objeto con éxito o error  
    //console.log(result)
    if (result.success){
        //Si la validación es exitosa, devuelvo el array de recetas
        return result.data
    }
}