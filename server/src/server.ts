import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectToDB } from './db'
import roomsRouter from './routes/room'
import userRouter from './routes/user'

dotenv.config()

export const app = express()
const PORT = process.env.PORT || 5000

connectToDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/rooms', roomsRouter)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
