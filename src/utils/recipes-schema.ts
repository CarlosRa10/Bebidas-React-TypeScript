import {z} from 'zod';

// esto es un esquema para validar la respuesta de la API de recetas
export const CategoriesAPIResponseSchema = z.object({
    drinks:z.array(
        z.object({
            strCategory: z.string()
        })
    )
 })

 export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
 })

 export const DrinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
 })
 
 export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse)
 })