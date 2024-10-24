import { AdvancedImage, lazyload, placeholder, responsive } from '@cloudinary/react'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Loading } from '../components/Loading.jsx'
import { BtnDownload } from '../components/BtnDownload.jsx'

export function MonsterPages () {
  const { myImage, addCostumeMonster, loading } = useCloudinary()

  return (
    <>
      <TopBar />
      <main className='flex justify-center w-screen h-96'>
        <article className='w-11/12 md:w-2/3 flex justify-between'>
          <article className='flex flex-col w-full pt-20 items-center'>
            <section className='flex gap-4'>
              <AdvancedImage
                cldImg={myImage}
                plugins={[lazyload(), placeholder({ mode: 'blur' }), responsive({ steps: 600 })]}
                className='w-full md:w-96 aspect-auto border-2 bg-black/50 border-black rounded'
              />
              <div className='flex flex-col gap-4 text-base md:text-xl lg:text-2xl'>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('vampire costume')}>Vampiro</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('werewolf costume')}>lobo</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('zombie costume')}>Zombie</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('devil costume')}>Demonio</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('mummy costume')}>Momia</button>
                <BtnDownload />
              </div>
            </section>

            {loading ? <Loading /> : null}
          </article>
        </article>

      </main>
    </>
  )
}
