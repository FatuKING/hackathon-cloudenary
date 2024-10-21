import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SpookyPages } from './pages/SpookyPages.jsx'
import { MonsterPages } from './pages/MonsterPages.jsx'
import { CartPages } from './pages/CartPages.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SpookyPages />} />
          <Route path='/monster' element={<MonsterPages />} />
          <Route path='/creatercart' element={<CartPages />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
