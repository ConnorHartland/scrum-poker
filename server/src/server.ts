import express, { Request, Response } from 'express'
import { connectToDB } from './db'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectToDB()

app.put('/', (req: Request, res: Response) => {
  console.log(req.body.name)
  res.send('Hello World!')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
