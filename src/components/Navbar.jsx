import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <>
      <div className='bg-slate-800 h-full w-2/12'>
        <ul className='flex flex-col p-2 text-xl'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'text-white' : 'text-green-600'}
            >Fondos escalofriantes
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/monster'
              className={({ isActive }) => isActive ? 'text-white' : 'text-green-600'}
            >Agregar Monstruos
            </NavLink>

          </li>

          <li>
            <NavLink
              to='/creatercart'
              className={({ isActive }) => isActive ? 'text-white' : 'text-green-600'}
            > Crear tarjeta de halloween
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
