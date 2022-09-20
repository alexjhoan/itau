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
  Divider,
  Tabs,
  Tab,
  useMediaQuery
} from '@mui/material'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import React, { useState } from 'react'
import { NextPage } from 'next'
import CallMeForm from '../components/CallMeForm'
import { grey } from '@mui/material/colors'

const dataBenefits = [
  {
    title: 'Financiación:',
    content: 'hasta el 100% del valor del vehículo que elijas.'
  },
  {
    title: 'Entrega:',
    content: 'sin entrega inicial.'
  },
  {
    title: 'Plazo:',
    content: 'hasta 60 meses de plazo a sola firma.'
  },
  {
    title: 'Monto mínimo de financiación:',
    content: 'Gs. 20.000.000 o USD 4.000.'
  },
  {
    title: 'Flexibilidad financiera:',
    content: 'suma de ingresos del cónyuge.'
  },

  {
    title: 'Seguro del vehículo:',
    content: 'descuento promocional hasta el 25% sobre el valor de la póliza para vehículos 0 Km.'
  },
  {
    title: 'Pago:',
    content: 'débito automático de la cuota en tu cuenta corriente o caja de ahorro de Itaú.'
  },
  {
    title: 'Nuevos clientes:',
    content: 'al ser un nuevo cliente Itaú, tendrás acceso a los beneficios otorgados por el banco.'
  }
]

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

const StyledTabsNav = styled(Box)(({ theme }) => ({
  '& .MuiTab-root': {
    minWidth: theme.spacing(25),
    backgroundColor: grey[300],
    color: grey[600],
    textTransform: 'capitalize',
    fontSize: 20,
    '&:first-of-type': {
      borderStartStartRadius: theme.spacing(2)
    },
    '&:last-of-type': {
      borderStartEndRadius: theme.spacing(2)
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 145,
      fontSize: 16
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))

const StyledTabsContent = styled(Box)(({ theme }) => ({
  border: `solid 1px ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(0, 0, 2, 2),
  padding: theme.spacing(4, 3),
  backgroundColor: theme.palette.common.white,
  '& ul': {
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2)
  }
}))

const Simulador: NextPage = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const [amount, setAmount] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [tab, setTab] = useState<number>(0)

  const handleChange = (event: Event, newAmount: number | number[]) => {
    setAmount(newAmount as number)
  }

  const handleChangeMonth = (event: Event, newMonth: number | number[]) => {
    setMonth(newMonth as number)
  }

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
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
                    <TextField
                      id="outlined-name"
                      hiddenLabel
                      value={amount.toLocaleString()}
                      disabled
                    />
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
                <Stack
                  spacing={3}
                  direction={isXs ? 'column' : 'row'}
                  justifyContent={'space-between'}
                >
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
                      Gs.{' '}
                      {amount != 0 && month != 0 ? (amount / month).toLocaleString() : '00.000.000'}
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
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <StyledTabsNav>
              <Tabs value={tab} onChange={changeTab}>
                <Tab label="Beneficios" />
                <Tab label="Requisitos" />
              </Tabs>
            </StyledTabsNav>
            <StyledTabsContent hidden={tab !== 0}>
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 700 }}>
                Características y beneficios
              </Typography>
              <ul>
                {dataBenefits.map((item, i) => (
                  <li key={i}>
                    <Typography variant="body1">
                      <b>{item.title} </b>
                      {item.content}
                    </Typography>
                  </li>
                ))}
              </ul>
            </StyledTabsContent>
            <StyledTabsContent hidden={tab !== 1}>
              <Typography variant="h6" color="secondary" sx={{ fontWeight: 700 }}>
                Requisitos
              </Typography>
            </StyledTabsContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Simulador
