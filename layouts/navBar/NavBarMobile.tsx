import React, { useState } from 'react'
import { Box, styled, IconButton, Drawer, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'
import { linksTypes, navBarTypes } from '../../types/navbar'
import { useRouter } from 'next/router'

const StyledNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .logo': {
    lineHeight: 0
  }
}))

const StyledMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(1),
  paddingTop: theme.spacing(1),
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    padding: theme.spacing(0, 2, 1),
    '&:not(:last-of-type)': {
      borderBottom: `solid 1px ${theme.palette.text.primary}`
    },
    '&.active': {
      fontWeight: '700'
    }
  }
}))

const NavBarMobile = ({ logo, links }: navBarTypes) => {
  const theme = useTheme()
  const router = useRouter()
  const [openDrawer, setopenDrawer] = useState(false)
  return (
    <StyledNav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={logo} width={40} height={40} />
          </a>
        </Link>
      </div>
      <IconButton onClick={() => setopenDrawer(true)}>
        <MenuIcon
          sx={{
            fontSize: 35,
            color: theme.palette.common.white,
            filter: 'drop-shadow(0px 2px 2px #0009)'
          }}
        />
      </IconButton>
      <Drawer anchor={'top'} open={openDrawer} onClose={() => setopenDrawer(false)}>
        <StyledMenu>
          {links.map((item: linksTypes, i: number) => (
            <Link href={`${item.url}`}>
              <a
                className={router.pathname === `${item.url}` ? 'active' : ''}
                onClick={() => setopenDrawer(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </StyledMenu>
      </Drawer>
    </StyledNav>
  )
}

export default NavBarMobile
