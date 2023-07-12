import jwt from 'jsonwebtoken'

const generateToken = () => {
  const token = jwt.sign(
    {
      /* additional payload if needed */
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '7d',
    }
  )
  return token
}

export { generateToken }
