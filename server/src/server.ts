import express, { Request, Response } from 'express'
import { connectToDB } from './db'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/user'

dotenv.config()

export const app = express()
const PORT = process.env.PORT || 5000

connectToDB()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
