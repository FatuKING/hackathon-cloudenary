import { AdvancedImage } from '@cloudinary/react'
import { Navbar } from '../components/Navbar.jsx'
import { TopBar } from '../components/TopBar.jsx'
import { useCloudinary } from '../hooks/useCloudinary.js'
import { Cloudinary } from '@cloudinary/url-gen'

export function SpookyPages () {
  const { imgPublicId } = useCloudinary()
  const cld = new Cloudinary({ cloud: { cloudName: 'michiking' } })
  const myImage = cld.image(imgPublicId)

  return (
    <>
      <TopBar />
      <main className='flex w-full h-full'>
        <Navbar />

        <AdvancedImage cldImg={myImage} />
      </main>
    </>
  )
}
