import { useEffect } from 'react'
import {Outlet} from 'react-router-dom'// Outlet es para renderizar el contenido de las rutas hijas
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useAppStore } from '../stores/useAppStore'


export default function Layout() {
  //pagina principal, layout, contenedor de las rutas hijas
  //en este caso es el header y el main
  //el main es el contenedor de las rutas hijas
  const  loadFromStorage = useAppStore((state)=>state.loadFromStorage)
  useEffect(()=>{
    loadFromStorage()
  },[])
  return (
    <>
         <Header/>
         <main className='container mx-auto py-16'>
            <Outlet/>
         </main>

         <Modal/>
         {/* El modal se renderiza en todas las rutas, por eso lo ponemos aquí */}
    </>
  )
}
