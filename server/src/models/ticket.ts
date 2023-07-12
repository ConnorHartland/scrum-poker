import mongoose, { Document, Schema } from 'mongoose'
import { VoteDocument } from './vote'

export interface TicketDocument extends Document {
  name: string
  storyPoints: number
  votes: VoteDocument[]
}

const ticketSchema = new Schema<TicketDocument>({
  name: { type: String, required: true },
  storyPoints: { type: Number, required: true },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
})

export default mongoose.model<TicketDocument>('Ticket', ticketSchema)
