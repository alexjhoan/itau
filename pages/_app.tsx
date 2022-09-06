import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Theme from '../theme/Theme'
import Layout from '../layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
