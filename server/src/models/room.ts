import mongoose, { Document, Schema } from 'mongoose'
import { TicketDocument } from './ticket'
import { UserDocument } from './user'

export interface RoomDocument extends Document {
  creator: UserDocument
  participants: UserDocument[]
  currentTicket: TicketDocument
  pastTickets: TicketDocument[]
}

const roomSchema = new Schema<RoomDocument>({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  currentTicket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' },
  pastTickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
})

export default mongoose.model<RoomDocument>('Room', roomSchema)
