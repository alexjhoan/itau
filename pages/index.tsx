import { Box, Container, styled, Typography, useMediaQuery, useTheme, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import Search from '../components/Search'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import AutoCard from '../components/AutoCard'
import { CustomSwiper } from '../components/CustomSwiper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const StyledHome = styled(Box)(({ theme }) => ({
  '& .swiperBanner .swiper-button-prev': {
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
  '& .swiperBanner .swiper-button-next': {
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

const StyledLendCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .iconItem': {
    display: 'flex',
    background: `linear-gradient(90deg, #FF9F0Fe6 0%, #DC772D 100%)`,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    padding: theme.spacing(2),
    borderRadius: '100%',
    marginBottom: theme.spacing(3),
    '& svg': {
      color: theme.palette.common.white,
      fontSize: 40
    }
  }
}))

const sectionLend = [
  {
    icon: <TimeToLeaveIcon />,
    title: 'Acced?? al veh??culo que dese??s',
    text: 'Te financiamos hasta el 100% del valor del veh??culo 0 Km que elijas, hasta 60 meses de plazo y a sola firma.'
  },
  {
    icon: <VerifiedUserIcon />,
    title: 'Protecci??n de tu veh??culo',
    text: 'Seguro de veh??culo con descuento promocional hasta el 25% sobre el valor de la p??liza para veh??culos 0 Km'
  },
  {
    icon: <RequestQuoteIcon />,
    title: 'Hac?? una compra inteligente',
    text: 'Para elegir tu auto, eval??a y compara precios y prestaciones.'
  }
]

const Home: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <StyledHome>
      <Swiper
        navigation={isSm ? false : true}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        className={'swiperBanner'}
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <StyledBanner sx={{ backgroundImage: 'url(/img/bannerHome.jpg)' }}>
              <Container maxWidth={isMd ? 'md' : 'lg'}>
                <Box className="contentBanner">
                  <Typography variant="h4" color="third.main">
                    Hac?? realidad el sue??o de tu auto propio
                  </Typography>
                </Box>
              </Container>
            </StyledBanner>
          </SwiperSlide>
        ))}
      </Swiper>
      <Search
        onClick={() => router.push('/buscador')}
        subTitle={'Seleccion?? los filtros para empezar tu b??squeda:'}
        title={
          <Fragment>
            Busc?? tu <b>pr??ximo veh??culo</b>
          </Fragment>
        }
      />
      <Box sx={{ backgroundColor: theme.palette.common.white }}>
        <Container maxWidth={'lg'}>
          <Grid container spacing={4} py={5} mt={0}>
            {sectionLend.map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <StyledLendCard>
                  <Box className="iconItem">{item.icon}</Box>
                  <Typography variant="h5" align="center" gutterBottom>
                    <b>{item.title}</b>
                  </Typography>
                  <Typography variant="body1" align="center">
                    {item.text}
                  </Typography>
                </StyledLendCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 8, overflow: 'hidden' }}>
        <Container maxWidth={isMd ? 'md' : 'lg'}>
          <Typography variant="h4" align={'center'} gutterBottom>
            <b>??Mir?? las opciones que tenemos para vos!</b>
          </Typography>
          <Typography variant="h6" align={'center'} mb={4}>
            Financiaci??n hasta el 100% del valor del veh??culo que elijas hasta 60 meses de plazo.
          </Typography>
          <CustomSwiper
            loop={true}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15
              }
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SwiperSlide key={i}>
                <AutoCard id={i} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.common.white, pt: 5, pb: 8, overflow: 'hidden' }}>
        <Container maxWidth={isMd ? 'md' : 'lg'}>
          <Typography variant="h4" align={'center'} mb={4}>
            <b>Nuestros aliados</b>
          </Typography>
          <CustomSwiper
            loop={true}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              600: {
                slidesPerView: 4,
                spaceBetween: 35
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 70
              }
            }}
          >
            {Array(8)
              .fill(2)
              .map((e, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={'/img/brands/chery.png'}
                    width={100}
                    height={50}
                    layout="responsive"
                    alt="..."
                  />
                </SwiperSlide>
              ))}
          </CustomSwiper>
        </Container>
      </Box>
    </StyledHome>
  )
}

export default Home
