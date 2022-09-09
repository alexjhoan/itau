import { Container, Stack, styled, Typography, Grid, Box, Button } from '@mui/material'
import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { grey } from '@mui/material/colors'
import { FancyInput } from '../components/FancyInput'

const StyledStack = styled(Stack)(({ theme }) => ({
  background: 'url(/img/contact-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const StyledForm = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: grey[50],
  overflow: 'hidden',
  '& .title': {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 4),
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 2)
    }
  },
  '& .subTitle': {
    maxWidth: 400,
    marginBottom: theme.spacing(2)
  },
  '& form': {
    padding: theme.spacing(2, 4, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    }
  }
}))

const StyledSecondCol = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}c0`,
  padding: theme.spacing(4),
  maxWidth: 300,
  borderRadius: theme.spacing(0, 0, 10, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(0, 0, 5, 0)
  }
}))

const contacto = () => {
  return (
    <StyledStack>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} py={10}>
          <Grid item xs={12} sm={7} md={6}>
            <StyledForm>
              <Typography variant="h5" className="title">
                <PhoneInTalkIcon sx={{ fontSize: 25 }} />
                Quiero que me llamen
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <Typography variant="body1" className="subTitle">
                  Dejanos tus datos de contacto y te llamaremos para contarte más sobre Préstamo Mi
                  Auto.
                </Typography>
                <FancyInput fullWidth error={false} type="text" label="Nombre:" helperText="" />
                <FancyInput fullWidth error={false} type="email" label="Email:" helperText="" />
                <FancyInput
                  fullWidth
                  error={false}
                  type="text"
                  label="Cédula(sin puntos ni guiones)"
                  helperText=""
                />
                <FancyInput fullWidth error={false} type="tel" label="Tel:" helperText="" />
                <Button variant="contained" color="primary" fullWidth={true}>
                  enviar
                </Button>
              </Box>
            </StyledForm>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={6}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <StyledSecondCol>
              <Typography variant="h4" color="third.main" sx={{ fontWeight: '700' }}>
                Hacé realidad el sueño de tu auto propio
              </Typography>
            </StyledSecondCol>
          </Grid>
        </Grid>
      </Container>
    </StyledStack>
  )
}

export default contacto
