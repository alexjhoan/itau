import React, { useRef } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { CustomSwiperTypes } from '../types/components'
import { Box, styled, IconButton } from '@mui/material'

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

const CustomSwiper = ({ children, ...rest }: CustomSwiperTypes): JSX.Element => {
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

export default CustomSwiper
