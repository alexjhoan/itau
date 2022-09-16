import { ReactNode } from 'react'
import { SwiperProps } from 'swiper/react'

export interface CustomSwiperTypes extends SwiperProps {
  children: ReactNode
}

export interface SearchTypes {
  title?: String | ReactNode
  subTitle: String
  onClick?: any
}

export interface formSearchInitTypes {
  typeCar: string[]
  brandCar: string[]
  stateCar: string[]
  min: string
  max: string
}
