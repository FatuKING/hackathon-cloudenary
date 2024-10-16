import { create } from 'zustand'

export const useCloudinary = create((set) => ({
  imgPublicId: 'noimage-removebg-preview_wvj5cs',
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
          set((state) => ({ imgPublicId: result.info.public_id }))
          console.log('Uploaded image URL: ', result.info.secure_url)
        }
      }
    )
    widget.open()
  }
}))
