import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  userId: string
  name: string
  token: string
  tokenExpiration: number // this is a timestamp
}

// Function to load the initial state from localStorage
const loadState = (): UserState => {
  try {
    const serializedState = localStorage.getItem('user')
    if (serializedState === null) {
      return { userId: '', name: '', token: '', tokenExpiration: -1 }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return { userId: '', name: '', token: '', tokenExpiration: -1 }
  }
}

const initialState: UserState = loadState()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId
      state.name = action.payload.name
      state.token = action.payload.token
      state.tokenExpiration = action.payload.tokenExpiration

      // Save to localStorage whenever the state changes
      localStorage.setItem('user', JSON.stringify(state))
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
