import { useCloudinary } from '../hooks/useCloudinary'

export function TopBar () {
  const { uploadImg } = useCloudinary()

  return (
    <>
      <header className='w-full bg-gray-700 flex justify-evenly items-center text-xl p-2'>
        <h1 className='font-semibold'>SpookySnap</h1>

        <button className='p-1 pl-2 pr-2 bg-blue-700 rounded text-lg' onClick={uploadImg}>
          Subir Imagen
        </button>
      </header>
    </>
  )
}
