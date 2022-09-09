import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import theme from '../theme/theme'
import Layout from '../layouts/Layout'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
