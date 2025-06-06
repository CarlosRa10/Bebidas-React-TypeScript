import {z} from 'zod';
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema';

// este archivo es el archivo de tipos, aquí se definen los tipos que se van a utilizar en la aplicación
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>