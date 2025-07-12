import { openrouter } from '@openrouter/ai-sdk-provider'
import {streamText} from 'ai'//simplifica código para llamar a la API de AI - apiReference: https://ai.dev/docs/api-reference/stream-text
//con el apikey sabra quienes somos 
//con el prompt sabra que le estamos preguntando 
//con el modelo sabra que tipo de respuesta queremos
export default {
    async generateRecipe(prompt:string){
       // console.log(prompt);
        // Aquí se llamaría al servicio de AI para generar la receta
        const result = streamText({
            // Aquí se configura el modelo de AI que se va a utilizar - objeto de configuración
            model: openrouter(''), // modelo de AI que se va a utilizar
            apiKey: import.meta.env.VITE_OPENROUTER_KEY, //llamar a la variable de entorno
            prompt, // el prompt que se le pasa a la IA
            stream: true, // habilita el streaming de la respuesta
        })  
    }
}