import express from 'express'
import { connectToDB } from './db'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectToDB()

app.get('/', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
