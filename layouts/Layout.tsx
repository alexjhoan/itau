import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: any) => {
  const { pathname } = useRouter()
  return (
    <>
      <Header />
      <Box sx={{ marginTop: '60px', backgroundColor: grey[100] }}>{children}</Box>
      {!pathname.includes('cpanel') && <Footer />}
    </>
  )
}

export default Layout
