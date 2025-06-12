import {z} from 'zod';
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from '../utils/recipes-schema';

// este archivo es el archivo de tipos, aquí se definen los tipos que se van a utilizar en la aplicación
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>

export type Drink = z.infer<typeof DrinkAPIResponse>

export type Recipe = z.infer<typeof RecipeAPIResponseSchema>