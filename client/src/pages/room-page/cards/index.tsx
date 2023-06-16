import { Box, Typography } from '@mui/material'
import Card from 'components/card'
import styled from '@emotion/styled'
import { Container } from '@mui/system'
import { motion } from 'framer-motion'

const Cards = () => {
  const CARDS = [
    { value: '?', selected: false },
    { value: '1', selected: false },
    { value: '2', selected: false },
    { value: '3', selected: false },
    { value: '5', selected: false },
    { value: '8', selected: false },
    { value: '13', selected: false },
    { value: '20', selected: false },
    { value: '40', selected: false },
    { value: '100', selected: false },
  ]

  return (
    <Wrapper maxWidth="md">
      <Typography variant="h5" color={'white'}>
        Select a card to vote on the current story point
      </Typography>
      <Row>
        {CARDS.map((card, index) => (
          <motion.div
            key={card.value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.01, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            <Card value={card.value} selected={card.selected} />
          </motion.div>
        ))}
      </Row>
    </Wrapper>
  )
}

export default Cards

const Wrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
})

const Row = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
})
