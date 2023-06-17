import mongoose from 'mongoose'

export const connectToDB = async () => {
  const url = process.env.DATABASE_URI

  mongoose
    .connect(url!)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB: ', error.message)
    })
}
