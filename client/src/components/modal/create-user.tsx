import styled from '@emotion/styled'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from 'redux/features/modal/modalSlice'
import { fetchToken, setUserName } from 'redux/features/user/userSlice'

const CreateUserModal = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')

  const onHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleFetchToken = async (name: string) => {
    // await dispatch(fetchToken(name))
  }

  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name }),
      })
      const data = await response.json()
      console.log(data)
      // Dispatch actions to store the user name and token in Redux
      dispatch(setUserName(name))
      handleFetchToken(name)
      dispatch(closeModal()) // Close the modal after creating the user
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper elevation={3}>
      <Typography variant="h4">Please Enter your Name</Typography>
      <TextField onChange={onHandleInput} value={name} />
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
