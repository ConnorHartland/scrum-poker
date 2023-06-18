import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response } from 'express'
import dotenv from 'dotenv'
import Room from '../models/room'
import User from '../models/user'

dotenv.config()

interface RequestBody {
  username: string
  token: string
}

interface DecodedPayload extends JwtPayload {
  _id: string
}

const createRoom = async (
  req: Request<object, object, RequestBody>,
  res: Response
) => {
  try {
    const { username, token } = req.body

    // verify token and get user id
    const decoded = await new Promise<DecodedPayload | null>(
      (resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
          if (err) {
            reject(err)
          } else {
            resolve(decoded as DecodedPayload)
          }
        })
      }
    )

    if (!decoded) {
      return res.status(401).send({ error: 'Token verification failed' })
    }

    // find the user
    const user = await User.findOne({})

    if (!user) {
      return res.status(404).send({ error: 'User not found' })
    }

    // create a new room with the user as the creator
    const room = new Room({ creator: user._id, participants: [user._id] })
    await room.save()

    // return the room id
    res.status(201).send({ roomId: room._id })
  } catch (error) {
    res.status(400).send(error)
  }
}

const getRooms = async (
  req: Request<object, object, RequestBody>,
  res: Response
) => {
  try {
    const { token } = req.body

    // verify token and get user id
    const decoded = await new Promise<DecodedPayload | null>(
      (resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
          if (err) {
            reject(err)
          } else {
            resolve(decoded as DecodedPayload)
          }
        })
      }
    )

    if (!decoded) {
      return res.status(401).send({ error: 'Token verification failed' })
    }

    // find the rooms where the user is a participant
    const rooms = await Room.find({ participants: { $in: [decoded._id] } })

    // return the rooms
    res.status(200).send({ rooms })
  } catch (error) {
    res.status(400).send(error)
  }
}

export { createRoom, getRooms }
