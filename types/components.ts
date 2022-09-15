import { ReactNode } from 'react'
import { SwiperProps } from 'swiper/react'

export interface CustomSwiperTypes extends SwiperProps {
  children: ReactNode
}

export interface SearchDropDownsTypes {
  type: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
  brand: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
  state: {
    anchorEl: null | HTMLElement
    open: boolean
    width: number
  }
}
