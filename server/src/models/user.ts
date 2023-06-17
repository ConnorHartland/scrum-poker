import mongoose, { Document, Schema } from 'mongoose'

export interface UserDocument extends Document {
  token: string
  tokenExpiration: Date
  name: string
}

const userSchema = new Schema<UserDocument>({
  token: { type: String, required: true },
  tokenExpiration: { type: Date, required: true },
  name: { type: String, required: true },
})

export default mongoose.model<UserDocument>('User', userSchema)
