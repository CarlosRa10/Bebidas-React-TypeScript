import type { StateCreator} from 'zustand'
import AIService from '../services/AIService';

export type AISlice = {
    recipe: string;
    generateRecipe: (prompt: string) => Promise<void>;//una promesa que recibe un string y no retorna nada
}

export const createAISlice : StateCreator<AISlice,[],[],AISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        //console.log(prompt);
        await AIService.generateRecipe(prompt);
    }
})