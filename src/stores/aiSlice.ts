import type { StateCreator} from 'zustand'
import AIService from '../services/AIService';

export type AISlice = {
    recipe: string;
    isGenerating: boolean; // Indica si se está generando una receta
    generateRecipe: (prompt: string) => Promise<void>;//una promesa que recibe un string y no retorna nada
}

export const createAISlice : StateCreator<AISlice> = (set) => ({
    recipe: '',
    isGenerating: false, // Inicialmente no se está generando una receta
    generateRecipe: async (prompt) => {
        //limpiar el estado de la receta antes de agregar el nuevo texto
        set({ recipe: '', isGenerating: true }); // Establece isGenerating a true al iniciar la generación
        //console.log(prompt);
        const data = await AIService.generateRecipe(prompt);
       // console.log('2. ¿Se obtuvo data?', Boolean(data)); // <-- Verifica si hay data
        //ejecuta el for mientras el data siga teniendo datos
        //console.log('Tipo de data:', typeof data);
        //console.log('Es iterable?', Symbol.asyncIterator in data);
        //console.log('Es ReadableStream?', data instanceof ReadableStream);
        //console.log('Propiedades de data:', Object.keys(data));
        //console.log(data);
        for await (const textPart of data) {
           //console.log(textPart);
           
           set((state =>({
            recipe: state.recipe + textPart
           })))
        }
        set({ isGenerating: false }); // Establece isGenerating a false al finalizar la generación   
    }
})