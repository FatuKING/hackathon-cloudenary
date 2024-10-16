import { useCloudinary } from '../hooks/useCloudinary'

export function TopBar () {
  const { uploadImg } = useCloudinary()

  return (
    <>
      <header className='w-full h-16 bg-transparent flex justify-center items-center p-2'>
        <div className='w-2/3 flex justify-between'>
          <h1 className='font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-500'>SpookySnap</h1>

          <button className='p-1 pl-2 pr-2 bg-orange-700 rounded text-2xl' onClick={uploadImg}>
            Subir Imagen
          </button>
        </div>
      </header>
    </>
  )
}
