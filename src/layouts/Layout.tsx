import {Outlet} from 'react-router-dom'// Outlet es para renderizar el contenido de las rutas hijas
import Header from '../components/Header'
export default function Layout() {
  return (
    <>
         <Header/>
         <main className='container mx-auto py-16'>
            <Outlet/>
         </main>
    </>
  )
}
