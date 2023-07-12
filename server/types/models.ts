export interface User {
  id: string
  name: string
}
// C R U D

export interface Vote {
  userId: string
  storyPoints: number
}
// C U

export interface Ticket {
  name: string
  storyPoints: number
  votes: Vote[]
}

export interface Room {
  participants: User[]
  currentTicket: Ticket
  pastTickets: Ticket[]
}
// CRUD
