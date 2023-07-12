import mongoose, { Document, Schema } from 'mongoose'

export interface VoteDocument extends Document {
  userId: string
  storyPoints: number
}

const voteSchema = new Schema<VoteDocument>({
  userId: { type: String, required: true },
  storyPoints: { type: Number, required: true },
})

export default mongoose.model<VoteDocument>('Vote', voteSchema)
