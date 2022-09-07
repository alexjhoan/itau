import { Container } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container maxWidth={'lg'} sx={{ minHeight: 'calc(100vh - 500px)', marginTop: '60px' }}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
