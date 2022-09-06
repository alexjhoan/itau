import { Box, Container, styled, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const StyledNav = styled('ul')(({ theme }) => ({
  margin: theme.spacing(0),
  '& .MuiTableCell-head': {
    fontSize: 13,
    lineHeight: 1.4,
    textAlign: 'center'
  },
  '& .MuiTableCell-body': {
    fontSize: 12,
    textAlign: 'center'
  }
}))

const Header = () => {
  const theme = useTheme()
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container maxWidth="lg">
        <StyledNav>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/simulador">
              <a>Simulador</a>
            </Link>
          </li>
          <li>
            <Link href="/comparador">
              <a>Comparador</a>
            </Link>
          </li>
          <li>
            <Link href="/concecionarias">
              <a>Concecionarias</a>
            </Link>
          </li>
          <li>
            <Link href="/prestamos">
              <a>Préstamos</a>
            </Link>
          </li>
          <li>
            <Link href="/sucursales">
              <a>Sucursales</a>
            </Link>
          </li>
          <li>
            <Link href="#contacto">
              <a>contacto</a>
            </Link>
          </li>
        </StyledNav>
      </Container>
    </Box>
  )
}

export default Header
