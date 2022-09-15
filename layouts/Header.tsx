import { Box, Container, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { linksTypes } from '../types/layouts'
import NavBarDesktop from './navBar/NavBarDesktop'
import NavBarMobile from './navBar/NavBarMobile'

const StyledNavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 60,
  alignItems: 'center',
  position: 'fixed',
  zIndex: 20,
  backgroundColor: theme.palette.primary.main,
  top: 0,
  width: '100%',
  left: 0,
  boxShadow: `0 5px 10px ${theme.palette.common.black}4`
}))

const links: linksTypes[] = [
  {
    url: '/simulador',
    name: 'Simulador'
  },
  {
    url: '/comparador',
    name: 'Comparador'
  },
  {
    url: '/concecionarias',
    name: 'Concecionarias'
  },
  {
    url: '/prestamos',
    name: 'Prestamos',
    subMenu: [
      {
        url: '#beneficios',
        name: 'Beneficios'
      },
      {
        url: '#requisitos',
        name: 'Requisitos'
      }
    ]
  },
  {
    url: '/sucursales',
    name: 'Sucursales'
  },
  {
    url: '#contacto',
    name: 'Contacto'
  }
]

const Header = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <StyledNavBar>
      <Container maxWidth="lg">
        {isSm ? (
          <NavBarMobile links={links} logo={'/img/logo.svg'} />
        ) : (
          <NavBarDesktop links={links} logo={'/img/logo.svg'} />
        )}
      </Container>
    </StyledNavBar>
  )
}

export default Header
