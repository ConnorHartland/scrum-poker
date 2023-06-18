interface Props {
  roomId: string
}
const RoomPage = ({ roomId }: Props) => {
  return (
    <div>
      <h1>Room {roomId}</h1>
    </div>
  )
}

export default RoomPage
