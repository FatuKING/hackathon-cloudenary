import { AdvancedImage, lazyload, placeholder, responsive } from '@cloudinary/react'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Loading } from '../components/Loading.jsx'
import { BtnDownload } from '../components/BtnDownload.jsx'

export function CartPages () {
  const { myImage, addText, loading } = useCloudinary()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const txt = formData.get('txt')
    const txtSize = Number(formData.get('txtSize'))
    const txtColor = formData.get('txtColor')
    const txtPosition = formData.get('txtPosition')

    await addText({ txt, txtSize, txtColor, txtPosition })
  }

  return (
    <>
      <TopBar />
      <main className='flex justify-center w-screen h-96'>
        <article className='w-11/12 md:w-2/3 flex justify-between'>
          <article className='flex flex-col w-full pt-20 items-center'>
            <section className='flex flex-col md:flex-row gap-4'>
              <AdvancedImage
                cldImg={myImage}
                plugins={[lazyload(), placeholder({ mode: 'blur' }), responsive({ steps: 200 })]}
                className='w-96 aspect-auto border-2 bg-black/50 border-black rounded'
              />
              <form className='flex flex-col gap-4 text-base md:text-xl lg:text-2xl' onSubmit={handleSubmit}>
                <label htmlFor='txt' className='flex justify-between'>Texto:
                  <input name='txt' className='bg-orange-700 p-1 border border-black focus:outline-none shadow-md shadow-black' type='text' />
                </label>

                <label className='flex justify-between' htmlFor='txtSize'>Tamaño:
                  <input name='txtSize' className='w-12 focus:outline-none bg-orange-700 border border-black shadow-md shadow-black' type='text' />
                </label>

                <label htmlFor='txtColor' className='flex justify-between md:flex-none'>
                  Color:
                  <select className='text-2xl bg-orange-700 border border-black shadow-md shadow-black' name='txtColor'>
                    <option className=' text-sm md:text-lg' value='#000000'>Negro</option>
                    <option className=' text-sm md:text-lg' value='#FFFFFF'>Blanco</option>
                    <option className=' text-sm md:text-lg' value='#FFA500'>Naranja</option>
                    <option className=' text-sm md:text-lg' value='#008000'>Verde</option>
                    <option className=' text-sm md:text-lg' value='#FF0000'>Rojo</option>
                    <option className=' text-sm md:text-lg' value='#FFFF00'>Amarillo</option>
                  </select>
                </label>

                <label className='flex justify-between' htmlFor='txtPosition'>
                  Posición:
                  <select className='text-2xl bg-orange-700 border border-black shadow-md shadow-black' name='txtPosition'>
                    <option className=' text-sm md:text-lg' value='north_west'>Noroeste</option>
                    <option className=' text-sm md:text-lg' value='nort'>Norte</option>
                    <option className=' text-sm md:text-lg' value='nort_east'>Noreste</option>
                    <option className=' text-sm md:text-lg' value='west'>Oeste</option>
                    <option className=' text-sm md:text-lg' value='center'>Centro</option>
                    <option className=' text-sm md:text-lg' value='east'>Este</option>
                    <option className=' text-sm md:text-lg' value='south_west'>Suroeste</option>
                    <option className=' text-sm md:text-lg' value='south'>Sur</option>
                    <option className=' text-sm md:text-lg' value='south_east'>Sureste</option>
                  </select>
                </label>

                <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' type='submit'>
                  Generar Texto
                </button>

                <BtnDownload />
              </form>

            </section>

            {loading ? <Loading /> : null}
          </article>
        </article>

      </main>
    </>
  )
}
