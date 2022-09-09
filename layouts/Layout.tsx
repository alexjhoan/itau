import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: 'calc(100vh - 60px)', marginTop: '60px' }}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
