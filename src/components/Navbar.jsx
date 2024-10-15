import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <>
      <div className='bg-slate-800 h-full w-2/12'>
        <ul className='flex flex-col text-xl text-center font-semibold'>
          <li className='border border-slate-500 p-1'>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}
            >Cambiar Fondo
            </NavLink>
          </li>

          <li className='border border-slate-500 p-1'>
            <NavLink
              to='/monster'
              className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}
            >Agregar Monstruos
            </NavLink>

          </li>

          <li className='border border-slate-500 p-1'>
            <NavLink
              to='/creatercart'
              className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}
            > Agregar Texto
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
