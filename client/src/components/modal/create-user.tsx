import styled from '@emotion/styled'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from 'redux/features/modal/modalSlice'
import { fetchToken, setUserName } from 'redux/features/user/userSlice'

const CreateUserModal = () => {
  const dispatch = useDispatch()
  const [nameInput, setNameInput] = useState<string>('')

  const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
    console.log(nameInput)
  }

  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput }),
      })
      const data = await response.json()
      console.log(data)
      // Dispatch actions to store the user name and token in Redux
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper elevation={3}>
      <Typography variant="h4">Please Enter your Name</Typography>
      <TextField onChange={onHandleInput} value={nameInput} />
      <Button variant="contained" onClick={createUser}>
        Create User
      </Button>
    </Wrapper>
  )
}

export default CreateUserModal

const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  width: '30rem',
  height: '20rem',
})
