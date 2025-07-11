import { createOpenRouter } from '@openrouter/ai-sdk-provider'//importar la dependencia de openrouter

export const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY, //llamar a la variable de entorno
})