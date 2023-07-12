import { configureStore } from '@reduxjs/toolkit'
import modalSlice from 'redux/features/modal/modalSlice'
import userSlice from 'redux/features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
