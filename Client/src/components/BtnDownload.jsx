import { useCloudinary } from '../hooks/useCloudinary.js'

export function BtnDownload () {
  const { url } = useCloudinary()

  const handleDownload = () => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'spookySnap.jpg'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch(err => console.error('Error al descargar la imagen:', err))
  }

  return (
    <>
      <button className='bg-orange-700 p-2 rounded shadow-md shadow-black' onClick={() => handleDownload()}>
        Descargar
      </button>
    </>
  )
}
