import { Box, Container, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import Search from '../components/Search'

const StyledHome = styled(Box)(({ theme }) => ({
  '& .swiper-button-prev': {
    color: theme.palette.common.white,
    opacity: '0.6',
    transition: 'opacity ease-in-out .2s',
    [theme.breakpoints.up('xl')]: {
      left: '7vw'
    },
    '&:hover': {
      opacity: '1'
    }
  },
  '& .swiper-button-next': {
    color: theme.palette.common.white,
    opacity: '0.6',
    transition: 'opacity ease-in-out .2s',
    [theme.breakpoints.up('xl')]: {
      right: '7vw'
    },
    '&:hover': {
      opacity: '1'
    }
  }
}))

const StyledBanner = styled(Box)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '450px',
  height: 'calc(100vh - 316px)',
  display: 'flex',
  alignItems: 'center',
  '& .contentBanner': {
    backgroundColor: `${theme.palette.primary.main}c0`,
    padding: theme.spacing(4),
    maxWidth: 300,
    borderRadius: theme.spacing(0, 0, 10, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      borderRadius: theme.spacing(0, 0, 5, 0)
    }
  }
}))

const Home: NextPage = () => {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <StyledHome>
      <Swiper navigation={isSm ? false : true} modules={[Navigation]} loop={true} slidesPerView={1}>
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <StyledBanner sx={{ backgroundImage: 'url(/img/bannerHome.jpg)' }}>
              <Container maxWidth={isMd ? 'md' : 'lg'}>
                <Box className="contentBanner">
                  <Typography variant="h4" color="third.main" sx={{ fontWeight: '700' }}>
                    Hacé realidad el sueño de tu auto propio
                  </Typography>
                </Box>
              </Container>
            </StyledBanner>
          </SwiperSlide>
        ))}
      </Swiper>
      <Search />
    </StyledHome>
  )
}

export default Home
