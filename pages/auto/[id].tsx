import { useRouter } from 'next/router'
import React from 'react'
import { Container, Grid } from '@mui/material'

const Auto = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          vehiculo
        </Grid>
        <Grid item xs={12} md={5}>
          calcula
        </Grid>
      </Grid>
    </Container>
  )
}

export default Auto
