import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface UserState {
  id: string
  name: string
}

const initialState: UserState = {
  id: '',
  name: '',
}

export const fetchToken = createAsyncThunk(
  'user/fetchToken',
  async (name: string) => {
    const response = await fetch('http://localhost:5000/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
    const data = await response.json()
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.id = action.payload.id
    })
  },
})

export const { setUserName } = userSlice.actions

export default userSlice.reducer
