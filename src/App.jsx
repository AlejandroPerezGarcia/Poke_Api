import { Route, Routes } from 'react-router-dom'
import React from 'react'
import PagePrincipa from './views/PagePrincipal'
import Pokemones from './views/Pokemones'
import Menu from './components/Menu'
import Detalle from './views/Detalle'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route
          path='/'
          element={<PagePrincipa />}
        />
        <Route
          path='/pokemones'
          element={<Pokemones />}
        />
        <Route
          path='/pokemon/:name'
          element={<Detalle />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}

export default App
