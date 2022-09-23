import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import CalculationLoan from '../../components/CalculationLoan'
import { CustomThumbsSwiper } from '../../components/CustomSwiper'

const Auto = () => {
  const router = useRouter()
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const { id } = router.query
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Nombre Car
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Desde USD 25.990
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <CustomThumbsSwiper imageList={Array(10).fill(1)} />
        </Grid>
        <Grid item xs={12} md={5}>
          <CalculationLoan />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Auto
