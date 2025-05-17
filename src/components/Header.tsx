import { useMemo } from 'react'
import {NavLink, useLocation} from 'react-router-dom'

export default function Header() {

    const {pathname} = useLocation()//destructuring para obtener pathname de lo que retorna useLocation
    //console.log(pathname)
    const isHome = useMemo(()=>pathname ==='/',[pathname])//useMemo para que no se ejecute cada vez que se renderiza el componente, solo cuando pathname cambia
    //console.log(isHome)


  return (
    <header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>
                <nav className="flex gap-4">
                    <NavLink to="/" className={({isActive})=> isActive ? 'text-orange-500 text-2xl font-bold uppercase' : 'text-white text-2xl font-bold uppercase' } 
                    >Inicio</NavLink>
                    <NavLink to="/favoritos" className={({isActive})=> isActive ? 'text-orange-500 text-2xl font-bold uppercase' : 'text-white text-2xl font-bold uppercase' } 
                    >Favoritos</NavLink>
                </nav>
            </div>

            {isHome && (
                <form
                    className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow-lg space-y-6'
                >
                    <div className='space-y-4'>
                        <label htmlFor="ingredient"
                        className='block text-white font-extrabold uppercase text-lg'
                        >Nombres o Ingredientes</label>

                        <input 
                            id='ingredient'
                            type='text'
                            name='ingredient'
                            className='p-3 w-full rounded-lg focus:outline-none bg-stone-50'
                            placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, etc.'
                        />
                    </div>

                    <div className='space-y-4'>
                        <label htmlFor="ingredient"
                        className='block text-white font-extrabold uppercase text-lg'
                        >Categorías</label>

                        <select 
                            id='ingredient'
                            name='ingredient'
                            className='p-3 w-full rounded-lg focus:outline-none bg-stone-50'
                        >
                            <option value="">-- Seleccione --</option>
                        </select>
                    </div>

                    <input 
                        type="submit"
                        value="Buscar"
                        className='cursosor-pointer bg-orange-800 text-white font-extrabold uppercase w-full p-2 rounded-lg hover:bg-orange-900 transition-colors'
                    />
                </form>
            )}
        </div>
    </header>
  )
}
