import mongoose, { Document, Schema } from 'mongoose'

export interface UserDocument extends Document {
  id: string
  name: string
}

const userSchema = new Schema<UserDocument>({
  id: { type: String, required: true },
  name: { type: String, required: true },
})

export default mongoose.model<UserDocument>('User', userSchema)
