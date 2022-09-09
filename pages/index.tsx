import { Box, Container, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'

// asi se estilizan los componentes y despues solo lo llamas abajo, igual cualdo lo vallas a hacer pregunta
const StyledTable = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiTableCell-head': {
    fontSize: 13,
    lineHeight: 1.4,
    textAlign: 'center'
  },
  '& .MuiTableCell-body': {
    fontSize: 12,
    textAlign: 'center'
  }
}))

const Home: NextPage = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box>
      <Typography variant="body1" color="initial">
        Home
      </Typography>
    </Box>
  )
}

export default Home
