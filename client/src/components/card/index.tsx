import styled from '@emotion/styled'
import { Typography } from '@mui/material'

interface CardProps {
  value: string
  selected: boolean
}

const Card = ({ value, selected }: CardProps) => {
  // Create function for handling selected

  return (
    <CardContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        {value}
      </Typography>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#7100b7a6',
  borderRadius: '10px',
  padding: '10px',
  margin: '10px',
  width: '100px',
  height: '150px',
  color: '#ffffff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  transition: 'all 0.2s ease-in-out',
})
