import express from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import notFound from './middlewares/NotFound'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
