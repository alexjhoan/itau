import { useRouter } from 'next/router'
import React from 'react'
import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  IconButton
} from '@mui/material'
import CalculationLoan from '../../components/CalculationLoan'
import { CustomThumbsSwiper } from '../../components/CustomSwiper'
import { grey } from '@mui/material/colors'
import EmailIcon from '@mui/icons-material/Email'
import { WhatsappIcon } from '../../components/WhatsappIcon'

const StyledVideoResponsive = styled(Box)(({ theme }) => ({
  height: 0,
  overflow: 'hidden',
  paddingBottom: '56.25%',
  paddingTop: 30,
  position: 'relative',
  '& iframe': {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
}))

const StyledBtnShared = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: `${theme.palette.secondary.main}c0`
  }
}))

const Auto = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const router = useRouter()
  // const { id } = router.query

  const feature = [
    'motor',
    'combustible',
    'transmicíon',
    'neumáticos',
    'vidrios',
    'airbag',
    'A/A',
    'autdio',
    'garantia',
    'cap. carga',
    'tracción'
  ]
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Nombre Car
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Desde USD 25.990
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <CustomThumbsSwiper imageList={Array(10).fill(1)} />
          <Box my={5}>
            <Typography
              variant={isMd ? 'h5' : 'h4'}
              color="secondary"
              sx={{ fontWeight: 700 }}
              gutterBottom
            >
              Atributos destacados
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem unde enim
              expedita nulla obcaecati magni dignissimos officia itaque nesciunt, in odit suscipit
              consequatur aliquid fugiat, quidem molestiae dicta. Quia! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nemo libero consequatur maxime omnis esse dignissimos
              reprehenderit fugit tempora voluptatem placeat dolorum obcaecati perspiciatis a
              nostrum, qui optio recusandae corrupti dolore.
            </Typography>
          </Box>
          <Box my={5}>
            <Typography
              variant={isMd ? 'h5' : 'h4'}
              color="secondary"
              sx={{ fontWeight: 700 }}
              gutterBottom
            >
              Descripción
            </Typography>
            <ul style={{ paddingLeft: 16, columns: 3 }}>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </Box>
          <Box my={5}>
            <Typography
              variant={isMd ? 'h5' : 'h4'}
              color="secondary"
              sx={{ fontWeight: 700 }}
              gutterBottom
            >
              Características
            </Typography>
            {feature.map((item, j) => (
              <Grid container sx={{ borderBottom: `solid 1px ${grey[500]}` }} key={j} py={1}>
                <Grid item xs={12} sm={5}>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ textTransform: 'capitalize', fontWeight: 700 }}
                  >
                    {item}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Typography variant="body1" color="initial">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
          <StyledVideoResponsive>
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/EPVGRTA72tU"
              title="¿Y VOS, PODÉS MANEJAR ASÍ?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </StyledVideoResponsive>
          <Stack
            direction={isXs ? 'column' : 'row'}
            justifyContent={'space-between'}
            spacing={2}
            mt={2}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontWeight: 700, fontSize: 18 }}
            >
              Descargar catálogo
            </Button>
            <Stack direction={'row'} justifyContent={'center'} spacing={2} alignItems={'center'}>
              <Typography variant="body2">Compartir</Typography>
              <StyledBtnShared>
                <EmailIcon sx={{ color: theme.palette.common.white }} />
              </StyledBtnShared>
              <StyledBtnShared>
                <WhatsappIcon sx={{ color: theme.palette.common.white }} />
              </StyledBtnShared>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <CalculationLoan />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Auto
