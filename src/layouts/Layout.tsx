import {Outlet} from 'react-router-dom'// Outlet es para renderizar el contenido de las rutas hijas
import Header from '../components/Header'
export default function Layout() {
  //pagina principal, layout, contenedor de las rutas hijas
  //en este caso es el header y el main
  return (
    <>
         <Header/>
         <main className='container mx-auto py-16'>
            <Outlet/>
         </main>
    </>
  )
}
