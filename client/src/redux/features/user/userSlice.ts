import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  id: string
  name: string
}

const initialState: UserState = {
  id: '',
  name: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // create user
    createUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id
      state.name = action.payload.name
    },
    // update user
    // delete user
  },
})

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions

export default userSlice.reducer
