import { Box, Container, styled, Typography } from '@mui/material'
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
  return (
    <Container maxWidth="lg">
      <Box>
        {/* <StyledTable>
          ...
        </StyledTable> */}
        <Typography variant="body1" color="initial">
          empieza aqui
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
