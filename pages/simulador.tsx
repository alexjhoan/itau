import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  useTheme,
  Stack,
  Slider,
  TextField,
  Divider
} from '@mui/material'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import React, { useState } from 'react'
import { NextPage } from 'next'
import CallMeForm from '../components/CallMeForm'

const StyledBanner = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/img/simulator-bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0)
}))

const StyledCalculation = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  '& .title': {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  }
}))

const StyledSlider = styled(Box)(({ theme }) => ({
  '& .MuiSlider-root': {
    padding: theme.spacing(0, 1)
  }
}))

const Simulador: NextPage = () => {
  const theme = useTheme()
  const [amount, setAmount] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)

  const handleChange = (event: Event, newAmount: number | number[]) => {
    setAmount(newAmount as number)
  }

  const handleChangeMonth = (event: Event, newMonth: number | number[]) => {
    setMonth(newMonth as number)
  }

  return (
    <Box>
      <StyledBanner>
        <Container maxWidth="lg">
          <Typography variant="h3" color="third.main" sx={{ fontWeight: 700 }}>
            Tener un auto nuevo,
            <br /> es sencillo
          </Typography>
        </Container>
      </StyledBanner>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={5}>
            <StyledCalculation>
              <Box className="title">
                <TimeToLeaveIcon sx={{ color: theme.palette.common.white, mr: 1, fontSize: 30 }} />
                <Typography variant="h5" color="common.white">
                  Calculá tu préstamo Mi Auto
                </Typography>
              </Box>
              <Box p={2}>
                <StyledSlider>
                  <Typography variant="body2" sx={{ mb: -2 }}>
                    Monto que necesito (Gs.)
                  </Typography>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Slider
                      aria-label="Volume"
                      value={amount}
                      onChange={handleChange}
                      min={0}
                      max={100000000}
                      step={100}
                    />
                    <TextField
                      id="outlined-name"
                      hiddenLabel
                      value={amount.toLocaleString()}
                      disabled
                    />
                  </Stack>
                </StyledSlider>
                <StyledSlider>
                  <Typography variant="body2" sx={{ mb: -2 }}>
                    Plazo del préstamos (meses)
                  </Typography>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <Slider
                      aria-label="Volume"
                      value={month}
                      onChange={handleChangeMonth}
                      min={0}
                      max={48}
                    />
                    <TextField id="outlined-name" hiddenLabel value={month} disabled />
                  </Stack>
                </StyledSlider>
                <Stack spacing={3} direction="row" justifyContent={'space-between'}>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Cantidad de cuotas:
                    </Typography>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
                      {month} Coutas
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Cantidad de cuotas:
                    </Typography>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }} align="right">
                      Gs.{' '}
                      {amount != 0 && month != 0 ? (amount / month).toLocaleString() : '00.000.000'}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="right"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      IVA incluido
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Divider variant="middle" />
              <CallMeForm isFooter={false} />
            </StyledCalculation>
          </Grid>
          <Grid item xs={12} md={6} lg={7}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Simulador
