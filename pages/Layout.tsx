import React from 'react'

const Layout = ({ children }: any) => {
  return (
    <>
      <div>header</div>
      {children}
      <div>footer</div>
    </>
  )
}

export default Layout
