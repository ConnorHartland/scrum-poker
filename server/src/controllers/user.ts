import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import User, { UserDocument } from '../models/user'
import { generateToken } from '../utils/token'

// TODO: Add a function to create a user and not need an ID
// TODO: User should be deleted from DB after 7 days of inactivity

const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body
    console.log('name:', name)

    // Generate a token for the user
    const token = generateToken()

    // Check if the user already exists by token
    let user = await User.findOne({ token })

    if (!user) {
      // Create a new user if not found
      const tokenExpiration = new Date(Date.now() + 60) // 7 days from now
      user = new User({ name, token, tokenExpiration })
      await user.save()
    }

    res.status(200).json({
      userId: user._id,
      name: user.name,
      token: user.token,
      tokenExpiration: user.tokenExpiration,
    })
  } catch (error) {
    console.error('Failed to submit name:', error)
    res.sendStatus(500)
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    return res.json(users).status(200)
  } catch (e) {
    console.error(e)
    return res.status(400)
  }
}

export { createUser, getAllUsers }
