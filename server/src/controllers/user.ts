import { Request, Response } from 'express'
import User, { UserDocument } from '../models/user'
import jwt from 'jsonwebtoken'

async function createUser(req: Request, res: Response) {
  try {
    const userData: UserDocument = req.body

    if (!userData.name) {
      return res.status(400).json({ error: 'Missing required fields: name' })
    }

    // Check if a user with the same ID already exists
    const token = jwt.sign({ id: userData.name }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    })

    userData.id = token

    console.log(userData)
    const user = new User(userData)
    await user.save()

    // Send a response back to the client
    return res.json({
      message: 'User created successfully',
      user: userData, // Replace this with the saved user document
    })
  } catch (e) {
    console.error(e)
    return res.status(400)
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
