import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <>
      <nav className='bg-transparent flex items-center justify-center w-screen pt-4'>

        <ul className='flex w-11/12 md:w-2/3 justify-between text-xl md:text-2xl lg:text-3xl font-semibold'>
          <li className='p-1'>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'text-orange-500' : 'text-white'}
            >Fondos
            </NavLink>
          </li>

          <li className='p-1'>
            <NavLink
              to='/monster'
              className={({ isActive }) => isActive ? 'text-orange-500' : 'text-white'}
            >Disfrazes
            </NavLink>

          </li>

          <li className='p-1'>
            <NavLink
              to='/creatercart'
              className={({ isActive }) => isActive ? 'text-orange-500' : 'text-white'}
            > Texto
            </NavLink>
          </li>
        </ul>

      </nav>
    </>
  )
}
