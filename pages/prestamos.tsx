import { Box, styled, Tab, Tabs, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { dataBenefits, dataRequirements } from '../utils/data'

const StyledBanner = styled(Box)(({ theme }) => ({
  height: 300,
  width: '100%',
  backgroundImage: 'url(/img/prestamos-bg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const StyledTabsNav = styled(Tabs)(({ theme }) => ({
  backgroundColor: grey[300],
  width: '34%',
  padding: theme.spacing(3, 0),
  '& .MuiTab-root': {
    textTransform: 'capitalize',
    fontSize: 20,
    alignItems: 'flex-end',
    width: '100%',
    maxWidth: '100%',
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
      fontWeight: 700
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
  padding: theme.spacing(4, 3),
  backgroundColor: theme.palette.common.white,
  width: '66%',
  maxWidth: 790,
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

const Prestamos: NextPage = () => {
  const [tab, setTab] = useState<number>(0)

  const changeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }
  return (
    <>
      <StyledBanner />
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <StyledTabsNav orientation="vertical" value={tab} onChange={changeTab}>
          <Tab label="Beneficios" />
          <Tab label="Requisitos" />
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
      </Box>
    </>
  )
}

export default Prestamos
