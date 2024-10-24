import { useCloudinary } from '../hooks/useCloudinary'
import { Navbar } from './Navbar.jsx'
import { SpookyAudio } from './SpookyAudio.jsx'

export function TopBar () {
  const { uploadImg } = useCloudinary()

  return (
    <>
      <header className='w-screen h-16 bg-transparent flex justify-center items-center p-2'>
        <div className='w-11/12 md:w-2/3 flex justify-between'>
          <h1 className='font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-500'>SpookySnap</h1>

          <div className='flex gap-4'>
            <button className='p-1 pl-2 pr-2 bg-orange-700 rounded text-base md:text-xl lg:text-2xl' onClick={uploadImg}>
              Subir
            </button>

            <SpookyAudio />
          </div>
        </div>
      </header>

      <Navbar />
    </>
  )
}
