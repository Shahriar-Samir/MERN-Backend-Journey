import express from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

export default app
