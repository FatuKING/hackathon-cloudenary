import { NavLink } from 'react-router-dom'
import { BtnDownload } from './btnDownload.jsx'

export function Navbar () {
  return (
    <>
      <aside className='bg-transparent flex items-center h-full w-1/4'>
        <ul className='flex flex-col text-3xl font-semibold bg-black/50 p-2 rounded'>
          <li className='p-1'>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'text-orange-700' : 'text-white'}
            >Cambiar Fondo
            </NavLink>
          </li>

          <li className='p-1'>
            <NavLink
              to='/monster'
              className={({ isActive }) => isActive ? 'text-orange-700' : 'text-white'}
            >Agregar Disfraz
            </NavLink>

          </li>

          <li className='p-1'>
            <NavLink
              to='/creatercart'
              className={({ isActive }) => isActive ? 'text-orange-700' : 'text-white'}
            > Agregar Texto
            </NavLink>
          </li>

          <li className='p-1'>
            <BtnDownload />
          </li>
        </ul>
      </aside>
    </>
  )
}
