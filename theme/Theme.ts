import { createTheme } from '@mui/material/styles'

const Theme = createTheme({
  palette: {
    primary: {
      main: '#f47920'
    },
    secondary: {
      main: '#fafb02'
    },
    text: {
      primary: '#12446e'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: 250
        }
      }
    }
  }
})

export default Theme
