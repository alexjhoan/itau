import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { FancyInput } from '../../components/FancyInput'
import { grey } from '@mui/material/colors'

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
  }
}))

const Login: NextPage = () => {
  return (
    <StyledLogin>
      <StyledForm sx={{ maxWidth: 450 }}>
        <CardContent>
          <Image src={'/img/logo.svg'} width={60} height={60} />
          <Typography variant="h5" color="secondary" sx={{ fontWeight: 700 }}>
            Préstamo Mi Auto Itaú
          </Typography>
          <Box component="form">
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
          {/* TODO hacer un boton que se intercambie el login con olvidar contraseña en la misma ventana */}
          <a className={'loginLink'}>¿Olvidaste tu contraseña?</a>
        </CardContent>
      </StyledForm>
    </StyledLogin>
  )
}

export default Login
