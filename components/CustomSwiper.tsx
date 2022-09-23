import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Navigation, Thumbs } from 'swiper'
import { CustomSwiperTypes } from '../types/components'
import { Box, styled, IconButton } from '@mui/material'
import Image from 'next/image'

const SwiperBtnStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  width: '50px',
  height: '50px',
  marginTop: 'calc(0px - (var(--swiper-navigation-size)/ 2))',
  zIndex: '10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  '&:after': {
    fontFamily: 'swiper-icons',
    fontSize: 20,
    textTransform: 'none!important',
    letterSpacing: '0',
    fontFeatureSettings: '',
    fontVariant: 'normal',
    lineHeight: '1'
  },
  '&.swiper-custombtn-prev': {
    left: '-20px',
    right: 'auto',
    '&:after': {
      content: '"prev"'
    }
  },
  '&.swiper-custombtn-next': {
    right: '-20px',
    left: 'auto',
    '&:after': {
      content: '"next"'
    }
  }
}))

export const CustomSwiper = ({ children, ...rest }: CustomSwiperTypes): JSX.Element => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)
  return (
    <Box position={'relative'} px={4}>
      <div ref={navigationPrevRef}>
        <SwiperBtnStyled className="swiper-custombtn-prev" />
      </div>
      <Swiper
        modules={[Navigation]}
        {...rest}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef?.current
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef?.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        {children}
      </Swiper>
      <div ref={navigationNextRef}>
        <SwiperBtnStyled className="swiper-custombtn-next" />
      </div>
    </Box>
  )
}

const StyledThumbsSwiper = styled(Box)(({ theme }) => ({
  '& .bannerSwiper': {
    '& .swiper-button-prev, .swiper-button-next': {
      color: theme.palette.common.white,
      '&:after': {
        fontSize: 30,
        textShadow: '0px 3px 3px #0008'
      }
    }
  },
  '& .thumbsSwiper': {
    '& .swiper-slide': {
      filter: 'grayscale(0.8)',
      opacity: 0.6,
      '&.swiper-slide-thumb-active': {
        filter: ' none',
        opacity: 1
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}))

export const CustomThumbsSwiper = ({ imageList }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <StyledThumbsSwiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Navigation, Thumbs]}
        className="bannerSwiper"
      >
        {imageList.map((item: any, i: any) => (
          <SwiperSlide key={i}>
            <Image
              src={'/img/autos/prueba.png'}
              width={670}
              height={360}
              layout="responsive"
              alt="..."
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="thumbsSwiper"
      >
        {imageList.map((item: any, i: any) => (
          <SwiperSlide key={i}>
            <Image
              src={'/img/autos/prueba.png'}
              width={670}
              height={360}
              layout="responsive"
              alt="..."
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledThumbsSwiper>
  )
}
