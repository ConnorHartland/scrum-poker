export interface User {
  id: string
  name: string
}

export interface Vote {
  userId: string
  storyPoints: number
}

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
