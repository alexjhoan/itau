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

let theme = createTheme()

theme = responsiveFontSizes(
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
      },
      common: {
        white: '#ffffff',
        black: '#000000'
      }
    },
    typography: {
      fontFamily: ['Helvetica', 'Roboto', 'Arial'].join(','),
      h1: {
        fontWeight: 700
      },
      h2: {
        fontWeight: 700
      },
      h3: {
        fontWeight: 700
      },
      h4: {
        fontWeight: 700
      },
      h5: {
        fontWeight: 700
      },
      h6: {
        fontWeight: 700
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: 50,
            minWidth: 150,
            textTransform: 'capitalize',
            fontWeight: 700,
            [theme.breakpoints.down('sm')]: {
              minWidth: 120
            }
          }
        }
      }
    }
  })
)

export default theme
