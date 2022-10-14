import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Slide,
  styled,
  Typography
} from '@mui/material'
import Image from 'next/image'
import { NextPage } from 'next'
import { FancyInput } from '../../components/FancyInput'
import { grey } from '@mui/material/colors'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

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
  const [inLogin, setInLogin] = useState(false)
  const containerRef = useRef(null)
  const router = useRouter()
  const login = () => {
    setInLogin(true)
    router.push('/cpanel/carlist')
  }

  return (
    <StyledLogin>
      <StyledForm sx={{ maxWidth: 450 }}>
        <CardContent ref={containerRef}>
          <Image src={'/img/logo.svg'} width={60} height={60} />
          <Typography variant="h5" color="secondary">
            Préstamo Mi Auto Itaú
          </Typography>
          <Box position={'relative'}>
            <Slide direction="right" in={hiddeForm == 1} container={containerRef.current}>
              <Box component="form" sx={{ '& > *': { mb: `16px!important` } }}>
                <FancyInput error={false} type="text" label="Email" helperText="" />
                <FancyInput error={false} type="password" label="Contraseña" helperText="" />
                <Button
                  disabled={inLogin}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ fontSize: 20, fontWeight: 700 }}
                  onClick={login}
                >
                  {inLogin ? <CircularProgress /> : 'Iniciar sesión'}
                </Button>
              </Box>
            </Slide>
            <Slide direction="left" in={hiddeForm == 2} container={containerRef.current}>
              <Box
                component="form"
                position={'absolute'}
                top={0}
                left={0}
                sx={{ '& > *': { mb: `16px!important` } }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ maxWidth: 300, margin: 'auto', mb: 3 }}
                >
                  Introducí tu email y seguí los pasos para reestablecer tu contraseña.
                </Typography>
                <FancyInput error={false} type="text" label="Email" helperText="" />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ fontSize: 20, fontWeight: 700 }}
                >
                  Recuperar contraseña
                </Button>
              </Box>
            </Slide>
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
