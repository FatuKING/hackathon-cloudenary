import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react'
import { Navbar } from '../components/Navbar.jsx'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Loading } from '../components/Loading.jsx'

export function SpookyPages () {
  const { myImage, addBackground, loading } = useCloudinary()

  return (
    <>
      <TopBar />
      <main className='flex justify-center w-full h-auto'>
        <article className='w-2/3 flex justify-between'>
          <Navbar />
          <article className='flex flex-col w-full pt-40 items-center'>
            <section className='flex gap-4'>
              <AdvancedImage
                cldImg={myImage}
                plugins={[lazyload(), placeholder({ mode: 'blur' }), responsive({ steps: 200 })]}
                className='h-96 w-full border-2 bg-black/50 border-black rounded'
              />
              <div className='flex flex-col gap-4 text-2xl'>
                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add eerie Halloween fog and glowing pumpkins to the background')}
                > Halloween
                </button>

                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add fiery hellish flames and smoldering embers to the background')}
                >Infierno
                </button>

                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add thick ghostly mist and crumbling tombstones beneath twisted barren trees in the background')}
                >Cementerio
                </button>

                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add flickering lights and cracked decayed walls of an abandoned asylum to the background')}
                >Manicomio
                </button>

                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add dark ominous shadows and old broken toys scattered across the orphanage floor in the background')}
                >Orfanato
                </button>

                <button
                  className='bg-orange-700 p-2 rounded shadow-md shadow-black'
                  onClick={() => addBackground('Add flickering lights peeling walls and bloodstained beds with eerie medical equipment in the background')}
                >Hospital
                </button>
              </div>
            </section>

            {loading ? <Loading /> : null}
          </article>
        </article>

      </main>
    </>
  )
}
