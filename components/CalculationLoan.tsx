import {
  Box,
  Divider,
  Slider,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import React, { useState } from 'react'
import CallMeForm from './CallMeForm'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'

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

const CalculationLoan = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const [amount, setAmount] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)

  const handleChange = (event: Event, newAmount: number | number[]) => {
    setAmount(newAmount as number)
  }

  const handleChangeMonth = (event: Event, newMonth: number | number[]) => {
    setMonth(newMonth as number)
  }

  return (
    <StyledCalculation>
      <Box className="title">
        <TimeToLeaveIcon sx={{ color: theme.palette.common.white, mr: 1, fontSize: 30 }} />
        <Typography variant="h5" color="common.white">
          Calculá tu préstamo Mi Auto
        </Typography>
      </Box>
      <Box p={2}>
        <Box>
          <Typography variant="body2" sx={{ mb: -2 }}>
            Monto que necesito (Gs.)
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent={'center'}
            flexWrap={isXs ? 'wrap' : 'nowrap'}
            pb={isXs ? 4 : 0}
          >
            <Slider
              aria-label="Volume"
              value={amount}
              onChange={handleChange}
              min={0}
              max={100000000}
              step={100}
            />
            <TextField id="outlined-name" hiddenLabel value={amount.toLocaleString()} disabled />
          </Stack>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: -2 }}>
            Plazo del préstamos (meses)
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent={'center'}
            flexWrap={isXs ? 'wrap' : 'nowrap'}
            pb={isXs ? 4 : 0}
          >
            <Slider
              aria-label="Volume"
              value={month}
              onChange={handleChangeMonth}
              min={0}
              max={48}
            />
            <TextField id="outlined-name" hiddenLabel value={month} disabled />
          </Stack>
        </Box>
        <Stack spacing={3} direction={isXs ? 'column' : 'row'} justifyContent={'space-between'}>
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
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: 700 }}
              align={isXs ? 'left' : 'right'}
            >
              Gs. {amount != 0 && month != 0 ? (amount / month).toLocaleString() : '00.000.000'}
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: 700 }}
              align={isXs ? 'left' : 'right'}
            >
              IVA incluido
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Divider variant="middle" />
      <CallMeForm isFooter={false} />
    </StyledCalculation>
  )
}

export default CalculationLoan
