import { useCloudinary } from '../hooks/useCloudinary'

export function TopBar () {
  const { uploadImg } = useCloudinary()

  return (
    <>
      <header className='w-full h-16 bg-slate-800 flex justify-center items-center text-xl p-2'>
        <div className='w-2/3 flex justify-between'>
          <h1 className='font-semibold text-2xl'>SpookySnap</h1>

          <button className='p-1 pl-2 pr-2 bg-blue-700 rounded text-lg' onClick={uploadImg}>
          Subir Imagen
          </button>
        </div>
      </header>
    </>
  )
}
