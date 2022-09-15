import { ReactNode } from 'react'

export interface CustomSwiperTypes {
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
