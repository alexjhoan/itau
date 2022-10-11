import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { FancyInput } from '../../components/FancyInput'
import { grey } from '@mui/material/colors'
import { useState } from 'react'

const StyledLogin = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  position: 'fixed',
  backgroundImage: 'url(/img/bg-login.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  top: '0',
  left: '0',
  zIndex: '100'
}))

const StyledForm = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  backgroundColor: grey[50],
  padding: theme.spacing(2, 1, 1),
  maxWidth: 450,
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: theme.spacing(3),
    width: '100%'
  },
  '& .loginLink': {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  },
  '& .btnChange': {
    color: theme.palette.text.primary
  }
}))

const Login: NextPage = () => {
  const [hiddeForm, setHiddeForm] = useState<number>(1)
  return (
    <StyledLogin>
      <StyledForm sx={{ maxWidth: 450 }}>
        <CardContent>
          <Image src={'/img/logo.svg'} width={60} height={60} />
          <Typography variant="h5" color="secondary" sx={{ fontWeight: 700 }}>
            Préstamo Mi Auto Itaú
          </Typography>
          <Box component="form" hidden={hiddeForm !== 1}>
            <FancyInput fullWidth error={false} type="text" label="Email" helperText="" />
            <FancyInput fullWidth error={false} type="password" label="Contraseña" helperText="" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontSize: 20, fontWeight: 700 }}
            >
              Iniciar sesión
            </Button>
          </Box>
          <Box component="form" hidden={hiddeForm !== 2}>
            <Typography
              variant="body1"
              align="center"
              sx={{ maxWidth: 300, margin: 'auto', mb: 3 }}
            >
              Introducí tu email y seguí los pasos para reestablecer tu contraseña.
            </Typography>
            <FancyInput fullWidth error={false} type="text" label="Email" helperText="" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontSize: 20, fontWeight: 700 }}
            >
              Recuperar contraseña
            </Button>
          </Box>
          <Button
            variant="text"
            className="btnChange"
            fullWidth
            onClick={() => setHiddeForm(hiddeForm == 1 ? 2 : 1)}
          >
            {hiddeForm == 1 ? '¿Olvidaste tu contraseña?' : 'Iniciar sesion'}
          </Button>
        </CardContent>
      </StyledForm>
    </StyledLogin>
  )
}

export default Login
