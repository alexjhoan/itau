import { Box, Container, styled, Typography, Grid, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import { NextPage } from 'next'
import { grey } from '@mui/material/colors'
import CalculationLoan from '../components/CalculationLoan'
import { dataBenefits, dataRequirements } from '../utils/data'

const StyledBanner = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/img/simulator-bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: theme.spacing(10, 0)
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
  const [tab, setTab] = useState<number>(0)

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
            <CalculationLoan />
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
              <ul>
                {dataRequirements.map((item, i) => (
                  <li key={i}>
                    <Typography variant="body1">{item}</Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                Sujeto a verificación y aprobación crediticia por parte del banco.
              </Typography>
            </StyledTabsContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Simulador
