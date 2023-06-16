import { Box } from '@mui/material'
import Card from 'components/card'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import { motion } from 'framer-motion'

const Cards = () => {
  // Create a  list of cards for Scrum poker that follow the Fibonacci sequence
  // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  const CARDS = [
    {
      value: '?',
      selected: false,
    },
    {
      value: '1',
      selected: false,
    },
    {
      value: '2',
      selected: false,
    },
    {
      value: '3',
      selected: false,
    },
    {
      value: '5',
      selected: false,
    },
    {
      value: '8',
      selected: false,
    },
    {
      value: '13',
      selected: false,
    },
    {
      value: '20',
      selected: false,
    },
    {
      value: '40',
      selected: false,
    },
    {
      value: '100',
      selected: false,
    },
  ]

  return (
    <Wrapper maxWidth="md">
      {CARDS.map((card, index) => (
        <motion.div
          key={card.value} // Make sure to provide a unique key
          initial={{ scale: 0 }} // initial state
          animate={{ scale: 1 }} // animate to
          transition={{
            delay: index * 0.2,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          exit={{ scale: 0 }} // exit state (if needed)
        >
          <Card value={card.value} selected={card.selected} />
        </motion.div>
      ))}
    </Wrapper>
  )
}

export default Cards

const Wrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
})
