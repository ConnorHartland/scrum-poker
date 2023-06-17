import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { json } from 'body-parser'
import mongoose from 'mongoose'
import connectDB from './config/database.ts'

const app = express()
const PORT = process.env.PORT || 5000
const errorHandler = require('./middleware/error')

connectDB()

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))

app.use(errorHandler)

const server = app.listen(PORT, () => {
  console.log(`server us running on port ${PORT}`)
})
process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`)
  server.close(() => process.exit(1))
})
