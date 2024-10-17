import { create } from 'zustand'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { generativeBackgroundReplace } from '@cloudinary/url-gen/actions/effect'

let publicId = ''

export const useCloudinary = create((set) => ({
  myImage: new CloudinaryImage('noimage-removebg-preview_wvj5cs', { cloudName: 'michiking' }),
  publicImgId: '',
  uploadImg: () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_NAME, // tu nombre de Cloudinary
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET, // tu preset de carga
        sources: ['local', 'url'],
        multiple: false,
        cropping: false
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log(result)
          publicId = result.info.public_id
          set((state) => ({
            publicImgId: result.info.public_id,
            myImage: new CloudinaryImage(publicId, { cloudName: 'michiking' })
          }))
          console.log('Uploaded image URL: ', result.info.secure_url)
        }
      }
    )
    widget.open()
  },
  addBackgroundHell: () => {
    set((state) => ({
      myImage: new CloudinaryImage(publicId, { cloudName: 'michiking' }).effect(
        generativeBackgroundReplace().prompt('Add scary vampire to the background')
      )
    })
    )
  },
  addBackground: (prompt) => {
    set((state) => ({
      myImage: new CloudinaryImage(publicId, { cloudName: 'michiking' }).effect(
        generativeBackgroundReplace().prompt(prompt)
      )
    })
    )
  }
}))
