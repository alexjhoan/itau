import { Box, Container, styled, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { linksTypes } from '../types/navbar'

const StyledNav = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: 0,
  display: 'flex',
  listStyle: 'none',
  height: 60,
  alignItems: 'center',
  columnGap: theme.spacing(2),
  '& li.logo': {
    lineHeight: 0
  },
  '& li': {
    '& a': {
      textDecoration: 'none',
      color: theme.palette.common.white,
      position: 'relative',
      '&.active': {
        color: theme.palette.secondary.main
      }
    },
    '&:hover': {
      '& > a': {
        color: theme.palette.secondary.main,
        '& .moreIcon': {
          transform: 'rotate(-180deg)'
        }
      },
      '& .dropDown': {
        '& ul': {
          maxHeight: '200px',
          opacity: '1'
        }
      }
    }
  },
  '& .moreIcon': {
    transform: 'rotate(0deg)',
    verticalAlign: 'middle',
    transition: 'transform ease-in-out .2s'
  }
}))

const StyledDropDown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  paddingTop: 15,
  transition: 'all ease-in-out 1s',
  '& ul': {
    backgroundColor: '#000000cc',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '120px',
    maxWidth: '200px',
    maxHeight: '0px',
    opacity: '0',
    transition: 'all ease-in-out .2s',
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
    overflow: 'hidden',
    '& li': {
      padding: theme.spacing(0.7, 1.5),
      '&:first-of-type': {
        paddingTop: theme.spacing(2)
      },
      '&:last-of-type': {
        paddingBottom: theme.spacing(2)
      }
    }
  }
}))

const StyledNavBar = styled(Box)(({ theme }) => ({
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
    url: '/contacto',
    name: 'Contacto'
  }
]

const Header = () => {
  const router = useRouter()
  return (
    <StyledNavBar>
      <Container maxWidth="lg">
        <StyledNav>
          <li className="logo">
            <Link href="/">
              <a>
                <Image src="/img/logo.svg" width={40} height={40} />
              </a>
            </Link>
          </li>
          {links.map((item, i) => (
            <li key={i}>
              <Link href={`${item.url}`}>
                <a className={router.pathname === `${item.url}` ? 'active' : ''}>
                  {item.name}
                  {item.subMenu && <ExpandMoreIcon className="moreIcon" />}
                </a>
              </Link>
              {item.subMenu && (
                <StyledDropDown className="dropDown">
                  <ul>
                    {item.subMenu.map((sub, j) => (
                      <li key={j}>
                        <Link href={`${item.url}${sub.url}`}>
                          <a>{sub.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </StyledDropDown>
              )}
            </li>
          ))}
        </StyledNav>
      </Container>
    </StyledNavBar>
  )
}

export default Header
