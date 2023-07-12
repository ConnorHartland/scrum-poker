import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  modalType: string
  modalProps: any
}

const initialState: ModalState = {
  modalType: '',
  modalProps: {},
}

// Modal slice
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType
      state.modalProps = action.payload.modalProps
    },
    closeModal: (state) => {
      state.modalType = ''
      state.modalProps = {}
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
