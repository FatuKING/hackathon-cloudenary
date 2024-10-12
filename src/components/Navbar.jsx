import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <>
      <div className='flex flex-col bg-slate-800 h-full'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'bg-blue-900' : 'bg-green-900'}
            >Fondos escalofriantes
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/monster'
              className={({ isActive }) => isActive ? 'bg-blue-900' : 'bg-green-900'}
            >Agregar Monstruos
            </NavLink>

          </li>

          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'bg-blue-900' : 'bg-green-900'}
            > Crear tarjeta de halloween
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
