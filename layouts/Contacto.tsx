import { Container, Stack, styled, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import CallMeForm from '../components/CallMeForm'

const StyledStack = styled(Stack)(() => ({
  background: 'url(/img/contact-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
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

const Contacto = () => {
  const { route } = useRouter()

  return (
    <StyledStack id={!route.includes('simulador') && !route.includes('auto') ? 'contacto' : '#'}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} py={10}>
          <Grid item xs={12} sm={7} md={6}>
            {!route.includes('simulador') && !route.includes('auto') && <CallMeForm />}
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

export default Contacto
