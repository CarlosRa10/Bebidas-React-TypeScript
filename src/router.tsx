import {BrowserRouter, Routes, Route} from 'react-router-dom'//React Router DOM
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'

// aqui es donde se definen las rutas de la aplicacion
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<IndexPage/>} index />
          <Route path="/favoritos" element={<FavoritesPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
