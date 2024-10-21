import { Router } from 'express'
import { CloudinaryController } from '../controllers/cloudinaryController.js'

export function createRouter () {
  const appRouter = Router()

  const appController = new CloudinaryController()

  appRouter.post('/uploadImage', appController.uploadImage)

  return appRouter
}
