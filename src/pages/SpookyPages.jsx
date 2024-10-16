import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react'
import { Navbar } from '../components/Navbar.jsx'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen'
import { generativeBackgroundReplace } from '@cloudinary/url-gen/actions/effect'
import { mode } from '@cloudinary/url-gen/actions/rotate'

export function SpookyPages () {
  const { imgPublicId } = useCloudinary()
  const cld = new Cloudinary({ cloud: { cloudName: 'michiking' } })
  const myImage = cld.image(imgPublicId)
  // const url = myImage.toURL()

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
                className='h-96 w-full border-2 bg-black border-black rounded'
              />
              <div className='flex flex-col gap-4 text-2xl'>
                <button className='bg-orange-700 p-2 rounded'>Vampiros</button>
                <button className='bg-orange-700 p-2 rounded'>Fantasmas</button>
                <button className='bg-orange-700 p-2 rounded'>Payasos</button>
                <button className='bg-orange-700 p-2 rounded'>Demonios</button>
                <button className='bg-orange-700 p-2 rounded'>Halloween</button>
              </div>
            </section>
          </article>
        </article>

      </main>
    </>
  )
}
