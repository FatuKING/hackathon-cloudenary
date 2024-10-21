import { AdvancedImage, lazyload, placeholder, responsive } from '@cloudinary/react'
import { Navbar } from '../components/Navbar.jsx'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Loading } from '../components/Loading.jsx'

export function MonsterPages () {
  const { myImage, addCostumeMonster, loading } = useCloudinary()

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
                plugins={[lazyload(), placeholder({ mode: 'blur' }), responsive({ steps: 600 })]}
                className='h-96 w-full border-2 bg-black/50 border-black rounded'
              />
              <div className='flex flex-col gap-4 text-2xl'>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('vampire costume')}>Vampiro</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('werewolf costume')}>lobo</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('zombie costume')}>Zombie</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('devil costume')}>Demonio</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('mummy costume')}>Momia</button>
                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => addCostumeMonster('clown costume')}>Payasos</button>
              </div>
            </section>

            {loading ? <Loading /> : null}
          </article>
        </article>

      </main>
    </>
  )
}
