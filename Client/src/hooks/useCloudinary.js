import { create } from 'zustand'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { generativeBackgroundReplace, generativeReplace } from '@cloudinary/url-gen/actions/effect'
import { uploadImage } from '../logic/uploadImg.js'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { source } from '@cloudinary/url-gen/actions/overlay'
import { text } from '@cloudinary/url-gen/qualifiers/source'
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle'
import { Position } from '@cloudinary/url-gen/qualifiers'
import { compass } from '@cloudinary/url-gen/qualifiers/gravity'

export const useCloudinary = create((set, get) => ({
  myImage: new CloudinaryImage('noimage-removebg-preview_wvj5cs', { cloudName: import.meta.env.VITE_CLOUDINARY_NAME }),
  publicImgId: '',
  url: '',
  loading: false,
  createCloudinaryImage: (publicId) => {
    return new CloudinaryImage(publicId, { cloudName: import.meta.env.VITE_CLOUDINARY_NAME }).resize(scale().width(384).height(384)).delivery(quality('auto'))
  },

  uploadImg: () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        sources: ['local', 'url'],
        multiple: false,
        cropping: false
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const publicId = result.info.public_id
          set({
            publicImgId: publicId,
            myImage: get().createCloudinaryImage(publicId)
          })
        }
      }
    )
    widget.open()
  },

  addBackground: async (prompt) => {
    try {
      set({ loading: true })

      const currentState = get()
      const newImage = currentState.createCloudinaryImage(currentState.publicImgId).effect(
        generativeBackgroundReplace().prompt(prompt)
      )

      const imageUrl = {
        imgUrl: newImage.toURL()
      }

      const data = await uploadImage(imageUrl)

      set({
        publicImgId: data.public_id,
        myImage: newImage,
        url: data.url
      })

      console.log('Nueva imagen subida con public_id:', data.public_id)
      console.log('Nueva imagen subida con url:', data.url)
    } catch (error) {
      console.error('Error al subir la imagen:', error)
    } finally {
      set({ loading: false })
    }
  },

  addCostumeMonster: async (prompt) => {
    try {
      set({ loading: true })

      const currentState = get()
      const newImage = currentState.createCloudinaryImage(currentState.publicImgId).effect(
        generativeReplace().from('clothes').to(prompt)
      )

      const imageUrl = {
        imgUrl: newImage.toURL()
      }
      const data = await uploadImage(imageUrl)

      set({
        publicImgId: data.public_id,
        myImage: newImage,
        url: data.url
      })
    } catch (error) {
      console.error('Error al subir la imagen:', error)
    } finally {
      set({ loading: false })
    }
  },

  addText: async ({ txt, txtSize, txtColor, txtPosition }) => {
    try {
      set({ loading: true })

      const currentState = get()
      const newImage = currentState.createCloudinaryImage(currentState.publicImgId).overlay(
        source(
          text(
            txt,
            new TextStyle('creepster', txtSize).fontWeight('bold').fontStyle('normal').textAlignment('left')
          ).textColor(txtColor)
        ).position(new Position().gravity(compass(txtPosition)))
      )

      const imageUrl = {
        imgUrl: newImage.toURL()
      }

      const data = await uploadImage(imageUrl)

      set({
        publicImgId: data.public_id,
        myImage: newImage,
        url: data.url
      })
    } catch (error) {
      console.error('Error al subir la imagen:', error)
    } finally {
      set({ loading: false })
    }
  }
}))
