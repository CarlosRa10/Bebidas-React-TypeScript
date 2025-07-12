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
            // modelo de AI que se va a utilizar
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt, // prompt es algo que espera streamText, es el texto que le vamos a pasar - prompt:prompt si se llaman igual solo prompt
        })  
        //console.log(result);
        return result.textStream
    }
}

//npm view @openrouter/ai-sdk-provider versions --json - para ver las versiones disponibles
//npm install @openrouter/ai-sdk-provider@0.7.2 // version estable