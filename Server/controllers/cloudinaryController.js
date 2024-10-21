import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export class CloudinaryController {
  async uploadImage (req, res) {
    const { imgUrl } = req.body

    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: true
    }

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imgUrl, options)
      console.log(result)
      res.status(200).send({ public_id: result.public_id, url: result.url })
    } catch (error) {
      console.error(error)
    }
  }
}
