import { useAppStore } from "../stores/useAppStore";

export default function GenerateAI() {

  const showNotification = useAppStore(state => state.showNotification);// 3 paso importar la función showNotification del store
  const generateRecipe = useAppStore(state => state.generateRecipe);// 4 paso importar la función generateRecipe del store
  const recipe = useAppStore(state => state.recipe); // 5 paso importar la receta generada del store
  const isGenerating = useAppStore(state => state.isGenerating);// 6 paso importar el estado de isGenerating del store

  //1 paso hacer una prueba del submit del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    //console.log('Desde el submit del formulario');
    //2 paso validar que el input no este vacio
    const form = new FormData(e.currentTarget);//va a generar el objeto FormData en base al submit del formulario
    const prompt = form.get('prompt') as string; // decimos que el prompt es un string
    if (prompt.trim()=== '') {
      showNotification({
        text:'El búsqueda no puede estar vacio',
        error:true
      })
      return;//3 paso si el input esta vacio mostrar un mensaje de error y no seguir con el código
    }
    await generateRecipe(prompt);//4 paso llamar a la función generateRecipe con el prompt
  }
  
  return (
    <>
      <h1 className="text-6xl font-extrabold">Generar Receta con IA</h1>

      <div className="max-w-4xl mx-auto">
        <form  
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 py-10'
        >
          <div className="relative">
            <input 
              name="prompt" 
              id="prompt" 
              className="border bg-white p-4 rounded-lg w-full border-slate-800" 
              placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
            />
            <button 
              type="submit" 
              aria-label="Enviar"
              className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}//desabilitar el botón si isGenerating es true de manera visual
              disabled={isGenerating} // deshabilitar el botón si isGenerating es true
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>
        {isGenerating && <p className="text-center animate-blink ">Generando...</p> }
        <div className="py-10 whitespace-pre-wrap">
          {recipe}
        </div>
      </div>

    </> 
  )
}