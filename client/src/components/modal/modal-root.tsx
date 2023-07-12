import { Dialog } from '@mui/material'
import { useSelector } from 'react-redux'
import { ModalState } from 'redux/features/modal/modalSlice'
import CreateUserModal from './create-user'

const MODALS = [
  {
    name: 'CREATE_USER',
    component: <CreateUserModal />,
  },
]

const ModalRoot = () => {
  const modal = useSelector((state: { modal: ModalState }) => state.modal)

  const Component = MODALS.find((m) => m.name === modal.modalType)?.component

  return <Dialog open={Boolean(Component)}>{Component}</Dialog>
}

export default ModalRoot
