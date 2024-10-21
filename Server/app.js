import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createRouter } from './routes/appRouter.js'

const app = express()

app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/', createRouter())

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
