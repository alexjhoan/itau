import { createTheme, responsiveFontSizes } from '@mui/material/styles'

interface customColors {
  third: {
    main: String
  }
}

declare module '@mui/material/styles' {
  interface Palette extends customColors {}
  interface PaletteOptions extends customColors {}
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#f47920',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#013398',
        contrastText: '#ffffff'
      },
      third: {
        main: '#fafb02'
      },
      text: {
        primary: '#333333'
      }
    },
    typography: {
      fontFamily: ['Helvetica', 'Roboto', 'Arial'].join(',')
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 50
          }
        }
      }
    }
  })
)

export default theme
