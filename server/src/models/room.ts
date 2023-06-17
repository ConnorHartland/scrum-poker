import mongoose, { Document, Schema } from 'mongoose'
import { UserDocument } from './user'
import { TicketDocument } from './ticket'

export interface RoomDocument extends Document {
  participants: UserDocument[]
  currentTicket: TicketDocument
  pastTickets: TicketDocument[]
}

const roomSchema = new Schema<RoomDocument>({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  currentTicket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' },
  pastTickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
})

export default mongoose.model<RoomDocument>('Room', roomSchema)
